export interface PayloadWithCallback {
    callback?: (data?: any) => void;
    errorCallback?: (data?: any) => void;
}

export interface DefaultAction<PayloadType> {
    type: string;
    payload?: PayloadType;
}