import { createContextBuilder } from "../../../../packages/common";

export const [
	createPaginationContext,
	getPaginationContext,
] = createContextBuilder<PaginationContext>();

interface PaginationContext {
	setPageSize(pageSize: number): void;
}
