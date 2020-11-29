<script context="module" lang="ts">
	let count = 0;
</script>

<script lang="ts">
	//#region Base
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `@smui/list/List:${count++}`;

	export let dom: HTMLDivElement | HTMLUListElement = undefined;
	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = {};
	//#endregion

	// List
	//#region imports
	import { createEventDispatcher, tick } from "svelte";
	import {
		GroupBinding,
		SingleSelectionGroup,
		MultiSelectionGroup,
	} from "../../common/selectable";
	import ListImpl, { OnListActionEvent } from "./ListImpl.svelte";
	import { ListOrientation, OnListChangeEvent } from "./types";
	import { SelectionType } from "../../common/hoc";
	//#endregion

	//#region exports
	export let multiSelection: boolean = false;
	export let orientation: ListOrientation = "vertical";

	export let dense: boolean = false;
	export let avatarList: boolean = false;
	export let twoLine: boolean = false;
	export let threeLine: boolean = false;
	export let wrapFocus: boolean = false;
	export let value: string | string[] = undefined;

	export let group: GroupBinding = undefined;
	//#endregion

	const dispatch = createEventDispatcher<{
		change: OnListChangeEvent;
	}>();

	//#region local variables
	let selectionType: SelectionType;
	$: selectionType = multiSelection ? "multi" : "single";

	let selectionGroup: SingleSelectionGroup | MultiSelectionGroup;
	//#endregion

	// Keep MDCList properties updated

	async function handleAction({
		targetIndex,
		listSelectedIndex,
	}: OnListActionEvent) {
		if (selectionType) {
			const item = selectionGroup.getItems()[targetIndex];

			if (!item) return;

			if (
				(selectionType === "single" && listSelectedIndex === targetIndex) ||
				(selectionType === "multi" &&
					(listSelectedIndex as number[]).includes(targetIndex))
			) {
				selectionGroup.setSelected(item, true);
			} else {
				selectionGroup.setSelected(item, false);
			}

			await tick();

			dispatch("change", {
				dom,
				value,
			});
		}
	}

	$: component = selectionType
		? selectionType === "single"
			? SingleSelectionGroup
			: MultiSelectionGroup
		: undefined;
</script>

{#if selectionType && !group}
	<svelte:component
		this={component}
		bind:this={selectionGroup}
		bind:value
		let:group>
		<ListImpl
			bind:dom
			{props}
			{id}
			class={className}
			{style}
			role="listbox"
			ariaMultiselectable={multiSelection}
			{selectionType}
			{orientation}
			{dense}
			{avatarList}
			{twoLine}
			{threeLine}
			{wrapFocus}
			on:action={(event) => handleAction(event.detail)}>
			<slot />
		</ListImpl>
	</svelte:component>
{:else}
	<ListImpl
		bind:dom
		{props}
		{id}
		class={className}
		{style}
		role="listbox"
		ariaMultiselectable={multiSelection}
		{selectionType}
		{orientation}
		{dense}
		{avatarList}
		{twoLine}
		{threeLine}
		{wrapFocus}
		{group}
		on:action={(event) => handleAction(event.detail)}>
		<slot />
	</ListImpl>
{/if}