import { css } from 'lit';

export const avatarThemeStyles = css`
  :host span.uit-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background-color: #f2f2f2;
    color: #666;
  }

  :host([theme='primary']) span.uit-avatar {
    background-color: var(--airtable-primary-color);
    color: var(--airtable-base-color);
  }

  :host([theme='error']) span.uit-avatar {
    background-color: var(--airtable-error-color);
    color: var(--airtable-base-color);
  }

  :host([size='small']) span.uit-avatar {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }

  :host([size='medium']) span.uit-avatar {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }

  :host([size='large']) span.uit-avatar {
    width: 60px;
    height: 60px;
    font-size: 16px;
  }

  :host([size='auto']) span.uit-avatar {
    width: 100%;
    height: 100%;
    font-size: inherit;
  }
`;
