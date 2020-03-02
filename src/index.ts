import {IRouteDefinition, NexusModule, ModuleConfig} from "@nexus-switchboard/nexus-extend";
import {routes} from "./routes";

export class LivenessModule extends NexusModule {

    public name = "liveness";

    public loadRoutes(_config: ModuleConfig): IRouteDefinition[] {
        return routes;
    }
}

export default new LivenessModule();
