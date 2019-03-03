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
}