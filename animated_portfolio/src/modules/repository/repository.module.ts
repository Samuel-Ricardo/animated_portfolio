import { Container } from "inversify";
import { LOCAL_REPOSITORY_MODULE } from "./local/local.module";

const MODULE = new Container({ autoBindInjectable: true });

const REPOSITORY_MODULE = Container.merge(MODULE, LOCAL_REPOSITORY_MODULE);
