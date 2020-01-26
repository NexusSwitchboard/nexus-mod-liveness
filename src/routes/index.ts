import {Request, Response} from "express";
import {IRouteDefinition} from "@nexus-switchboard/nexus-extend";

export const routes: IRouteDefinition[] = [{
    method: "get",
    path: "/up",
    handler: async (_req: Request, res: Response) => {
        return res.json({message: "up"}).status(200);
    },
    protected: false
}];
