import {IRouteDefinition, NexusModule, NexusModuleConfig} from "@nexus-switchboard/nexus-extend";
import {routes} from "./routes";

export class LivenessModule extends NexusModule {

    public name = "liveness";

    public loadRoutes(_config: NexusModuleConfig): IRouteDefinition[] {
        return routes;
    }
}

export default new LivenessModule();
