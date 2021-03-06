import { createContextBuilder } from "../../common";
import { DrawerVariant } from "./types";

const [
	createDrawerContext,
	getDrawerContext,
] = createContextBuilder<DrawerContext>();
export { createDrawerContext, getDrawerContext };

export interface DrawerContext {
	variant: DrawerVariant;
}
