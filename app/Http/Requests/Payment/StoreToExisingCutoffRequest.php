<?php

namespace App\Http\Requests\Payment;

use App\Rules\CutoffMonth;
use App\Rules\ExistCutoffActivity;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class StoreToExisingCutoffRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function failedValidation(Validator $validator): JsonResponse
    {
        $errors = (new ValidationException($validator))->errors();

        throw new HttpResponseException(
            response()->json([
                'message' => "",
                'errors' => $errors
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY)
        );
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $start_date = $this->input('start_date');
        $end_date = $this->input('end_date');

        return [
            'activity_id' => 'required|array',
            'activity_id.*' => ['required', new ExistCutoffActivity],
            'start_date' => ['required', 'date', new CutoffMonth($start_date, $end_date)],
            'end_date' => 'required|date|after_or_equal:start_date',
        ];
    }

    /**
     * Get the validation attributes.
     * 
     */
    public function attributes(): array
    {
        return [
            'activity_id' => 'activity identifier',
        ];
    }
}
