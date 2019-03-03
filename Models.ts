export module Models {
    export class ChromeRequest {
        action: string;
        payload: Video;
    }

    export class Video {
        public Minutes: number;
        public Seconds: number;
        public Ms: number;
    
        public ClipName: string;
        public VideoId: string;
        public Length: string;
        public IsPreviewing: boolean;

        constructor(
            minutes: number,
            seconds: number,
            ms: number,
            clipName: string,
            videoId: string,
            length: string,
            isPreviewing: boolean) {
                this.Minutes = minutes,
                this.Seconds = seconds,
                this.Ms = ms,
                this.ClipName = clipName,
                this.VideoId = videoId,
                this.Length = length,
                this.IsPreviewing = isPreviewing
            }
    }

    export class ActionNames {
        GetVideo: string = "Action_GetVideo";
        GetVideoResponse: string = "Action_GetVideo_Reponse";

        ReturnVideo: string = "Action_ReturnVideo";
        ReturnVideoResponse: string = "Action_ReturnVideo_Response";

        SaveClip: string = "Action_StoreClipToCache";
        SaveClipResponse: string = "Action_StoreClipToCache_Response";
    }
}