import { css } from 'lit';
import { addGlobalThemeStyles } from './global';

export const colorBase = css`
  :host {
    --airtable-base-color: #fff;
    --airtable-primary-color: #2d7ff9;
    --airtable-error-color: #ef3061;
    --airtable-success-color: #11af22;
  }
`;

addGlobalThemeStyles('airtable-styles', colorBase);
