export class ActionNames {
    readonly GetVideo: string;
    readonly GetVideoResponse: string;
    readonly ReturnVideo: string;
    readonly ReturnVideoResponse: string;
    readonly SaveClip: string;
    readonly SaveClipResponse: string;

    constructor() {
        this.GetVideo = "Action_GetVideo";
        this.GetVideoResponse = "Action_GetVideo_Response";
        this.ReturnVideo = "Action_ReturnVideo";
        this.ReturnVideoResponse = "Action_ReturnVideo_Response";
        this.SaveClip = "Action_SaveClip";
        this.SaveClipResponse = "Action_SaveClip_Response";
    }
}