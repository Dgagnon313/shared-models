export module ChromeExtModels {
    export const ChromeStorageActionTypes = {
        GetVideo: "Action_GetVideo",
        ReturnVideo: "Action_ReturnVideo",
        SetPreview: "Action_SetPreview",
        StoreClipToCache: "Action_StoreClipToCache" // TODO: Danny Maybe we want some kind of a recent clip storage?
    }

    export class ChromeStorageRequestModel {
        action: string;
        payload: any; // TODO: Danny Add a real payload type
    }
}