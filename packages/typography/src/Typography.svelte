<script lang="ts" context="module">
	import { TypographyVariant } from "./";
	import { H1, H2, H3, H4, H5, H6, P, Span } from "../../common/dom";

	function getDefaultComponent(variant: TypographyVariant) {
		switch (variant) {
			case "headline1":
				return H1;
			case "headline2":
				return H2;
			case "headline3":
				return H3;
			case "headline4":
				return H4;
			case "headline5":
				return H5;
			case "headline6":
			case "subtitle1":
			case "subtitle2":
				return H6;
			case "caption":
			case "button":
			case "overline":
				return Span;
			case "body1":
			case "body2":
			default:
				return P;
		}
	}
</script>

<script lang="ts">
	//#region Base
	import { DOMEventsForwarder } from "../../common/actions";
	const forwardDOMEvents = DOMEventsForwarder();
	let className = "";
	export { className as class };
	export let style: string = undefined;
	export let id: string = undefined;

	export let dom: HTMLElement = undefined;

	import { BaseProps } from "../../common/dom/Props";
	export let props: BaseProps = {};
	//#endregion

	// Typography
	export let variant: TypographyVariant = "body1";
	export let component: any = getDefaultComponent(variant);
</script>

<svelte:component
	this={component}
	bind:dom
	{id}
	class="{className || ''} mdc-typography--{variant}"
	{style}
	on:domEvent={forwardDOMEvents}
	{...props}>
	<slot />
</svelte:component>
