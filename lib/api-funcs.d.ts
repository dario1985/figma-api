import { Vector, FrameOffset } from "./ast-types";
import { GetFileNodesResult, GetImageResult, GetImageFillsResult, GetFileResult, GetCommentsResult, PostCommentResult, GetUserMeResult, GetVersionsResult, GetTeamProjectsResult, GetProjectFilesResult, GetTeamComponentsResult, GetTeamStylesResult, GetComponentResult, GetStyleResult, GetFileComponentsResult } from "./api-types";
import { ApiRequestMethod } from "./utils";
declare type ApiClass = {
    request: ApiRequestMethod;
};
export declare function getFileApi(this: ApiClass, 
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey: string, opts?: {
    /** A specific version ID to get. Omitting this will get the current version of the file */
    version?: string;
    /** If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes */
    ids?: string[];
    /** Positive integer representing how deep into the document tree to traverse. For example, setting this to 1 returns only Pages, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes */
    depth?: number;
    /** Set to "paths" to export vector data */
    geometry?: 'paths';
}): Promise<GetFileResult>;
export declare function getFileNodesApi(this: ApiClass, 
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey: string, 
/** list of node IDs to retrieve and convert */
ids: string[], opts?: {
    /** A specific version ID to get. Omitting this will get the current version of the file */
    version?: string;
    /** Set to "paths" to export vector data */
    geometry?: 'paths';
}): Promise<GetFileNodesResult>;
export declare function getImageApi(this: ApiClass, fileKey: string, opts: {
    /** A comma separated list of node IDs to render */
    ids: string;
    /** A number between 0.01 and 4, the image scaling factor */
    scale: number;
    /** A string enum for the image output format */
    format: 'jpg' | 'png' | 'svg' | 'pdf';
    /** Whether to include id attributes for all SVG elements. `Default: false` */
    svg_include_id?: boolean;
    /** Whether to simplify inside/outside strokes and use stroke attribute if possible instead of <mask>. `Default: true` */
    svg_simplify_stroke?: boolean;
    /** Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping. `Default: false` */
    use_absolute_bounds?: boolean;
    /** A specific version ID to get. Omitting this will get the current version of the file */
    version?: string;
}): Promise<GetImageResult>;
export declare function getImageFillsApi(this: ApiClass, fileKey: string): Promise<GetImageFillsResult>;
export declare function getCommentsApi(this: ApiClass, fileKey: string): Promise<GetCommentsResult>;
export declare function postCommentsApi(this: ApiClass, fileKey: string, message: string, client_meta: Vector | FrameOffset): Promise<PostCommentResult>;
export declare function getUserMeApi(this: ApiClass): Promise<GetUserMeResult>;
export declare function getVersionsApi(this: ApiClass, fileKey: string): Promise<GetVersionsResult>;
export declare function getTeamProjectsApi(this: ApiClass, team_id: string): Promise<GetTeamProjectsResult>;
export declare function getProjectFilesApi(this: ApiClass, project_id: string): Promise<GetProjectFilesResult>;
/** Get a paginated list of published components within a team library */
export declare function getTeamComponentsApi(this: ApiClass, team_id: string, opts?: {
    /** Number of items in a paged list of results. Defaults to 30. */
    page_size?: number;
    /** A map that indicates the starting/ending point from which objects are returned. The cursor value is an internally tracked integer that doesn't correspond to any Ids */
    cursor?: {
        [x: string]: number;
    };
}): Promise<GetTeamComponentsResult>;
export declare function getFileComponentsApi(this: ApiClass, project_id: string): Promise<GetFileComponentsResult>;
/** Get metadata on a component by key. */
export declare function getComponentApi(this: ApiClass, componentKey: string): Promise<GetComponentResult>;
export declare function getTeamStylesApi(this: ApiClass, team_id: string, opts?: {
    /** Number of items in a paged list of results. Defaults to 30. */
    page_size?: number;
    /** A map that indicates the starting/ending point from which objects are returned. The cursor value is an internally tracked integer that doesn't correspond to any Ids */
    cursor?: {
        [x: string]: number;
    };
}): Promise<GetTeamStylesResult>;
export declare function getStyleApi(this: ApiClass, 
/** The unique identifier of the style */
styleKey: string): Promise<GetStyleResult>;
export {};
