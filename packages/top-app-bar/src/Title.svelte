<script lang="ts">
	import A from "../../common/dom/A.svelte";
	import Span from "../../common/dom/Span.svelte";
	import { DOMEventsForwarder } from "../../common/events";

	const forwardDOMEvents = DOMEventsForwarder();

	export let dom: HTMLAnchorElement | HTMLSpanElement = null;
	export let href = null;
	export let component: typeof A | typeof Span = href ? A : Span;
	let className: string = "";
	export { className as class };
	export let style: string = "";
</script>

<svelte:component
	this={component}
	bind:dom
	class="mdc-top-app-bar__title {className}"
	{style}
	on:domEvent={forwardDOMEvents}>
	<slot />
</svelte:component>
