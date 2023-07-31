import { css } from 'lit';

export const buttonThemeStyle = css`
  :host button {
    border: none;
    border-radius: 3px;
    padding: 7px 12px;
    cursor: pointer;
    outline: none;
    font-size: 14px;
  }

  :host([theme='primary']) button {
    background-color: var(--airtable-primary-color);
    color: var(--airtable-base-color);
  }

  :host([theme='outline']) button {
    background-color: var(--airtable-base-color);
    color: var(--airtable-primary-color);
    border: 1px solid var(--airtable-primary-color);
  }

  :host([theme~='primary'][theme~='error']) button {
    background-color: var(--airtable-error-color);
    color: var(--airtable-base-color);
  }

  :host([theme~='primary'][theme~='success']) button {
    background-color: var(--airtable-success-color);
    color: var(--airtable-base-color);
  }

  :host([theme~='outline'][theme~='error']) button {
    background-color: var(--airtable-base-color);
    color: var(--airtable-error-color);
    border: 1px solid var(--airtable-error-color);
  }
`;
