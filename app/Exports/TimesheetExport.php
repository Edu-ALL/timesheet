<?php

namespace App\Exports;

use App\Models\Timesheet;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TimesheetExport implements FromView
{
    protected $timesheet;
    protected $activities;

    public function __construct($timesheet, $activities)
    {
        $this->timesheet = $timesheet;
        $this->activities = $activities;
    }
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function view(): View
    {
        # because timesheet can be for single client and multiple clients and the way we show the data becomes different
        # so thats why we need parameter to tell user wether its group or non-group (i.e. sat or semi-private)
        $isGroup = count($this->timesheet['clientProfile']) > 1 ? true : false;

        # define the clients so that either client is single or multiple, we only use 1 variable
        $clients = $isGroup ? $this->timesheet['clientProfile'] : $this->timesheet['clientProfile'][0];

        # store the activities data into activities variable, so that viewData can allow to be inside compact()
        $activities = $this->activities;

        # merge all variables that going to show in view 
        $viewData = compact('isGroup', 'clients', 'activities');

        return view('exports.timesheet', $this->timesheet + $viewData);
    }
}
