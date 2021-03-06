import { ItemContext } from "./item";
import { createContextBuilder } from "../../common";
import { SelectionType } from "../../common/hoc";
import { ListImplRole } from "./internal";
import { SelectionGroupBinding } from "@raythurnevoid/svelte-group-components/esm/selectable";

const [createListContext, getListContext] = createContextBuilder<ListContext>();
export { createListContext, getListContext };

export interface ListContext {
	dom: HTMLDivElement | HTMLUListElement;
	role: ListImplRole;
	group: SelectionGroupBinding;
	isNav: boolean;
	selectionType: SelectionType;
	registerItem(item: ItemContext): void;
	unregisterItem(item: ItemContext): void;
	reinitialize(): void;
}
