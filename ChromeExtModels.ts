export module Models {
    export class ChromeRequest {
        action: string;
        payload: Video;
    }

    export class Video {
        public minutes: number;
        public seconds: number;
        public ms: number;
    
        public clipName: string;
        public videoId: string;
        public length: string;
        public isPreviewing: boolean;
    }
}