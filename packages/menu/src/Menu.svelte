<script context="module" lang="ts">
	let count = 0;
</script>

<script lang="ts">
	//#region Base
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `@smui/menu/Menu:${count++}`;

	export let dom: HTMLDivElement = undefined;
	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = undefined;
	//#endregion

	// Menu
	import { MDCMenuDistance } from "@material/menu-surface";
	import { MenuAnchorCorner, MenuVariant } from ".";
	import { ListOrientation, ListType } from "../../list";
	import { Menu } from "./internal";
	import { SelectionType } from "../../common/hoc";

	//#region exports
	//#region list
	export let orientation: ListOrientation = "vertical";
	export let type: ListType = "textual";
	export let itemsRows: number = 1;

	export let dense: boolean = false;
	export let density: number = 0;
	//#endregion

	//#region menu surface
	export let open: boolean = false;
	export let quickOpen: boolean = false;
	export let anchorFlipRtl: boolean = true;
	export let anchorCorner: MenuAnchorCorner = "bottom-start";
	$: anchorCorner = anchorCorner ? anchorCorner : "bottom-start";
	export let anchorMargin: MDCMenuDistance = undefined;
	export let variant: MenuVariant = undefined;

	export let hoisted: boolean;
	//#endregion

	//#region common
	export let wrapFocus: boolean = false;
	//#endregion

	export let selectionType: SelectionType = undefined;
	export let value: string | string[] = undefined;
	//#endregion
</script>

<svelte:options immutable={true} />

<Menu
	bind:dom
	bind:open
	bind:value
	{props}
	{id}
	class={className}
	{style}
	{quickOpen}
	{anchorCorner}
	{anchorFlipRtl}
	{anchorMargin}
	{variant}
	{hoisted}
	{wrapFocus}
	{orientation}
	{type}
	{itemsRows}
	{dense}
	{density}
	{selectionType}
	on:open
	on:close
	on:select
	on:change>
	<slot />
</Menu>
