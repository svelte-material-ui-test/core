<script lang="ts">
	// Base
	import { DOMEventsForwarder } from "../../common/events";
	const forwardDOMEvents = DOMEventsForwarder();
	let className = undefined;
	export { className as class };
	export let style: string = undefined;
	export let id: string = undefined;

	export let dom: GraphicElement = undefined;
	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = {};

	// Icon
	import {
		Graphic,
		GraphicElement,
		GraphicType,
	} from "../../common/components";
	import { parseClassList } from "../../common/functions";

	export let type: GraphicType = "icon";
</script>

<svelte:options immutable={true} />

<Graphic
	bind:dom
	{props}
	{id}
	class={parseClassList([
		className,
		'mdc-fab__icon',
		[type === 'icon' && className == undefined, 'material-icons'],
	])}
	{style}
	{type}
	on:domEvent={forwardDOMEvents}>
	<slot />
</Graphic>
