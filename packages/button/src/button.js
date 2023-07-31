import { LitElement, html, css } from 'lit';
import { buttonThemeStyle } from './button-theme';
import { ElementMixins } from '@ace-lib/component-base';
import { ButtonMixins } from './button-mixins';

class Button extends ElementMixins(ButtonMixins(LitElement)) {
  static styles = css`
    ${buttonThemeStyle}
  `;

  static get is() {
    return 'a-button';
  }

  render() {
    return html`
      <button ${this.name && `name=${this.name}`}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define(Button.is, Button);
