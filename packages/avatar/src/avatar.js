import { LitElement, html, css } from 'lit';
import { ElementMixins } from '@ace-lib/component-base';
import { avatarThemeStyles } from './avatar-theme';
import { AvatarMixins } from './avatar-mixins';

class Avatar extends ElementMixins(AvatarMixins(LitElement)) {
  static styles = css`
    ${avatarThemeStyles}
  `;

  static get is() {
    return 'uit-avatar';
  }

  avatarSize() {
    try {
      return JSON.parse(this.size);
    } catch (err) {
      console.log(err);
      return this.size;
    }
  }

  render() {
    const size = this.avatarSize();
    return html` <span class="uit-avatar">${this.name}</span> `;
  }
}

customElements.define(Avatar.is, Avatar);
