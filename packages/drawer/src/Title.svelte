<script context="module" lang="ts">
	let count = 0;
</script>

<script lang="ts">
	//#region Base
	import { parseClassList } from "../../common/functions";
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = `@smui/drawer/Title:${count++}`;

	export let dom: HTMLHeadingElement = undefined;
	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = {};
	//#endregion
</script>

<svelte:options immutable={true} />

<h1
	bind:this={dom}
	{...props}
	{id}
	class={parseClassList([className, 'mdc-drawer__title'])}
	{style}>
	<slot />
</h1>
