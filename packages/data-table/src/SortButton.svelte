<script context="module" lang="ts">
	let count = 0;
</script>

<script lang="ts">
	//#region Base
	import { parseClassList } from "../../common/functions";
	import { DOMEventsForwarder } from "../../common/events";
	const forwardDOMEvents = DOMEventsForwarder();
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `../../data-table/SortButton:${count++}`;

	export let dom: HTMLButtonElement = undefined;

	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = {};
	//#endregion

	// SortButton
	import { Icon, IconButton } from "../../icon-button";
	import { onDestroy } from "svelte";
	import { SortDirection, getHeadCellContext } from "./";

	export let direction: SortDirection = undefined;
	export let ariaLabel: string = undefined;

	const headCellContext$ = getHeadCellContext();

	$headCellContext$.setSort(true);

	$: $headCellContext$?.setSortDirection(direction);

	onDestroy(() => {
		$headCellContext$.setSort(false);
	});
</script>

<IconButton
	bind:dom
	{...props}
	{id}
	class={parseClassList([className, 'mdc-data-table__sort-icon-button'])}
	{style}
	{ariaLabel}
	aria-describedby="{id}__status"
	on:domEvent={forwardDOMEvents}>
	<slot>
		<Icon>arrow_upward</Icon>
	</slot>
</IconButton>
<div
	class="mdc-data-table__sort-status-label"
	aria-hidden="true"
	id="{id}__status" />
