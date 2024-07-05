<?php

namespace App\Providers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /* pagination */
        Collection::macro('paginate', function ($perPage = 15, $page = null, $options = []) {
            $page = $page ?: (LengthAwarePaginator::resolveCurrentPage() ?: 1);
            $paginator = new LengthAwarePaginator(
                items: $this->forPage($page, $perPage),
                total: $this->count(),
                perPage: $perPage,
                currentPage: $page,
                options: $options
            );
    
            return $paginator->withPath(Request::url());
        });
    }
}
