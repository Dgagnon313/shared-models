export module ChromeExtModels {
    export const GetVideo: string = "Action_GetVideo"
    export const ReturnVideo: string = "Action_ReturnVideo"
    export const SetPreview: string = "Action_SetPreview"
    export const  StoreClipToCache: string = "Action_StoreClipToCache"

    export class ChromeStorageRequestModel {
        action: string;
        payload: any; // TODO: Danny Add a real payload type
    }
}