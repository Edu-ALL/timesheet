<?php

namespace App\Http\Traits;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

trait HttpCall
{
    public function make_call(string $method, string $endpoint, array $params = []): array
    {
        $request = Http::withHeaders([
            'Header-ET' => $this->tokenService->get(),
        ])->{$method}( $endpoint, $params );

        if ( $request->failed() ) {
            Log::error('Failed to make a call to ' . $endpoint);
            throw new HttpResponseException(
                response()->json($request->json(), JsonResponse::HTTP_BAD_REQUEST)
            );
        }

        return [$request->getStatusCode(), $request->json()];
    }
}
