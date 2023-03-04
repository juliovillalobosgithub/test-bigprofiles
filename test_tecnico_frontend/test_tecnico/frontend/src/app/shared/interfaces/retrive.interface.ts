export interface Retrive {
    values: Value[];
    logs:   Log[];
}

export interface Log {
    key:               number;
    payload:           string;
    creation_datetime: Date;
    response_time:     number;
    response_code:     number;
}


export interface Value {
    key:                    number;
    creation_datetime:      Date;
    total_response_time_ms: number;
    total_requests:         number;
    total_errors:           number;
}