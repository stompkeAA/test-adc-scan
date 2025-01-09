import '../index';
import '@aileron/icon';

import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { html, nothing } from 'lit';

const meta: Meta = {
  title: 'Deprecated Aileron/Button',
  component: 'adc-button',
};
export default meta;

type Story = StoryObj;

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check system settings and set the theme accordingly
const isDarkMode = prefersDarkScheme.matches;

const Demo: Story = {
  parameters: {
    backgrounds: {
      default: isDarkMode ? 'dark' : 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  argTypes: {
    kind: {
      options: ['primary', 'secondary', 'ghost', 'primaryInverse'],
      control: { type: 'select' },
    },
    size: {
      options: ['', 'sm', 'fullwidth', 'field', 'fullwidth sm'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset', 'menu'],
      control: { type: 'select' },
    },
    'adc-click': {
      table: {
        disable: true,
      },
    },
    'adc-focus': {
      table: {
        disable: true,
      },
    },
    'adc-blur': {
      table: {
        disable: true,
      },
    },
    'leading-icon': {
      control: 'boolean',
    },
    'trailing-icon': {
      control: 'boolean',
    },
    default: {
      table: {
        disable: true,
      },
    },
    interactive: {
      table: {
        disable: true,
      },
    },
    'label-text': {
      table: {
        disable: true,
      },
    },
  },
  args: {
    kind: 'primary',
    disabled: false,
    labelText: 'Label',
    size: '',
    autofocus: false,
    type: 'button',
    'leading-icon': false,
    'trailing-icon': false,
  },
  render: (props) => {
    const {
      disabled,
      labelText,
      'leading-icon': leadingIcon,
      'trailing-icon': trailingIcon,
      autofocus,
      kind,
      size,
      type,
    } = props;

    let leadingIconElement = nothing;
    let trailingIconElement = nothing;

    if (leadingIcon) {
      leadingIconElement = html`<adc-icon
        slot="leading-icon"
        icon="action:plus"
        outlined
        size="24"
      ></adc-icon>`;
    }
    if (trailingIcon) {
      trailingIconElement = html`<adc-icon
        slot="trailing-icon"
        icon="action:plus"
        outlined
        size="24"
      ></adc-icon>`;
    }

    return html`<div
      style="margin: 0 3rem; display:flex; gap:1rem; flex-direction: column"
    >
      <h1
        style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 2rem; line-height: 1.5rem"
      >
        Button
      </h1>
      <p
        style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
      >
        Button (<code>adc-button</code>) is a clickable element that is used to
        trigger actions. It communicates calls to action to the user and allows
        users to interact with pages in a variety of ways.
      </p>
      <div
        style="${kind === 'primaryInverse'
          ? 'background-color:#181E25;'
          : ''} padding:1rem;"
      >
        <adc-button
          ?disabled=${disabled}
          ?autofocus="${autofocus}"
          kind="${kind}"
          size="${size}"
          type="${type}"
        >
          ${leadingIconElement} ${labelText} ${trailingIconElement}</adc-button
        >
      </div>
    </div>`;
  },
};

const InContext: Story = {
  parameters: {
    backgrounds: {
      default: isDarkMode ? 'dark' : 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  render: () => {
    return html`<div
      style="border-radius: .25rem;
    border: 1px solid black; width: 250px; padding: 1rem"
    >
      <h4
        style="margin: 0 1rem .5rem 0; font-weight: 700; font-size: 1rem; line-height: 1.5rem"
      >
        Privacy and cookies
      </h4>
      <p
        style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
      >
        We use cookies on our website. Your interactions and personal data may
        be collected on our websites by us and our partners in accordance with
        our privacy policy.
      </p>
      <adc-button size="sm fullwidth">Ok</adc-button>
    </div>`;
  },
};

const Features: Story = {
  parameters: {
    backgrounds: {
      default: isDarkMode ? 'dark' : 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
    onFocus: { action: 'onFocus' },
    onBlur: { action: 'onBlur' },
  },
  render: () => {
    return html`<div style="margin: 0 3rem;">
      <h1
        style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 2rem; line-height: 1.5rem"
      >
        Features
      </h1>
      <p
        style="margin-bottom: 3rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
      >
        The following demos are examples of supported component configurations.
      </p>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Default
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          This is the standard appearance for the different
          <code>adc-button</code> variants.
        </p>
        <div style="display:flex;">
          <div style="padding:1rem">
            <adc-button>Default</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button kind="primary">Primary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button kind="secondary">Secondary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button kind="ghost">Ghost</adc-button>
          </div>
          <div style="background-color:#181E25; padding:1rem">
            <adc-button kind="primaryInverse">primaryInverse</adc-button>
          </div>
        </div>
      </section>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Small size
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          <code>adc-button</code> should support a compact, smaller variant.
        </p>
        <div style="display:flex;">
          <div style="padding:1rem">
            <adc-button size="sm">Default</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="sm" kind="primary">Primary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="sm" kind="secondary">Secondary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="sm" kind="ghost">Ghost</adc-button>
          </div>
          <div style="background-color:#181E25; padding:1rem">
            <adc-button size="sm" kind="primaryInverse"
              >primaryInverse</adc-button
            >
          </div>
        </div>
      </section>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          aileron-color-scheme="dark"
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          Adding aileron-color-scheme="dark" enables dark-mode behavior as per
          device settings
          <code>adc-button</code>.
        </p>
        <div style="display:flex;">
          <div style="padding:1rem">
            <adc-button aileron-color-scheme="dark">Default</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button aileron-color-scheme="dark" kind="primary"
              >Primary</adc-button
            >
          </div>
          <div style="padding:1rem">
            <adc-button aileron-color-scheme="dark" kind="secondary"
              >Secondary</adc-button
            >
          </div>
          <div style="padding:1rem">
            <adc-button aileron-color-scheme="dark" kind="ghost"
              >Ghost</adc-button
            >
          </div>
          <div style="background-color:#181E25; padding:1rem">
            <adc-button aileron-color-scheme="dark" kind="primaryInverse"
              >primaryInverse</adc-button
            >
          </div>
        </div>
      </section>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Icon slots
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          <code>adc-button</code> should support leading and trailing icons.
        </p>
        <div style="display:flex; gap:1rem">
          <adc-button
            ><adc-icon
              slot="leading-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon
            >leading-icon Slot</adc-button
          >
          <adc-button
            ><adc-icon
              slot="trailing-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon
            >trailing-icon Slot</adc-button
          >
          <adc-button size="sm"
            ><adc-icon
              slot="leading-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon
            >leading-icon Slot</adc-button
          >
          <adc-button size="sm"
            ><adc-icon
              slot="trailing-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon
            >trailing-icon Slot</adc-button
          >
        </div>
      </section>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Full width
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          <code>adc-button</code> should support its width filling the parent
          container.
        </p>
        <div style="display:grid;">
          <div style="padding:1rem">
            <adc-button size="fullwidth">Default</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth" kind="primary">Primary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth" kind="secondary">Secondary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth" kind="ghost">Ghost</adc-button>
          </div>
          <div style="background-color:#181E25; padding:1rem">
            <adc-button size="fullwidth" kind="primaryInverse"
              >primaryInverse</adc-button
            >
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth sm">Default</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth sm" kind="primary">Primary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth sm" kind="secondary"
              >Secondary</adc-button
            >
          </div>
          <div style="padding:1rem">
            <adc-button size="fullwidth sm" kind="ghost">Ghost</adc-button>
          </div>
          <div style="background-color:#181E25; padding:1rem">
            <adc-button size="fullwidth sm" kind="primaryInverse"
              >primaryInverse</adc-button
            >
          </div>
        </div>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Loading state
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          <code>adc-button</code> should support an inline spinner.
        </p>
        <div style="display:flex; gap: 1rem;">
          <div style="padding:1rem">
            <adc-button is-loading>Default</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button is-loading kind="primary">Primary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button is-loading kind="secondary">Secondary</adc-button>
          </div>
          <div style="padding:1rem">
            <adc-button is-loading kind="ghost">Ghost</adc-button>
          </div>
          <div style="background-color:#181E25; padding:1rem">
            <adc-button is-loading kind="primaryInverse"
              >primaryInverse</adc-button
            >
          </div>
        </div>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Disabled
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          <code>adc-button</code> should support disabled state.
        </p>
        <div style="display:flex;flex-direction: column; gap:1rem">
          <adc-button disabled>Disabled</adc-button>
          <adc-button size="sm" disabled>Disabled</adc-button>
          <adc-button size="fullwidth" disabled>Disabled</adc-button>
          <adc-button size="sm fullwidth" disabled>Disabled</adc-button>
        </div>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Custom events
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          <code>adc-button</code> emits the following event listeners: 'click',
          'focus', and 'blur'.
        </p>
        <div style="display:flex;flex-direction: column; gap:1rem">
          <adc-button @adc-click=${action('Custom @adc-click')}
            >@adc-click</adc-button
          >
          <adc-button @adc-focus=${action('Custom @adc-focus')}
            >@adc-focus</adc-button
          >
          <adc-button @adc-blur=${action('Custom @adc-blur')}
            >@adc-blur</adc-button
          >
        </div>
      </section>
    </div>`;
  },
};

const StressTests: Story = {
  parameters: {
    backgrounds: {
      default: isDarkMode ? 'dark' : 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  render: () => {
    return html`<div
      style="margin: 0 3rem; display:flex; gap:1rem; flex-direction: column"
    >
      <h1
        style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 2rem; line-height: 1.5rem"
      >
        Stress tests
      </h1>
      <p
        style="margin-bottom: 3rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
      >
        The following demos are to test edge cases of button configurations.
        These are not best practices and generally should not be used.
      </p>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Long label text
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          Labels with long and very long text.
        </p>
        <div style="display:flex; flex-direction: column; gap:1rem">
          <adc-button> Default button with long label</adc-button>
          <adc-button size="sm"> Small button with long label</adc-button>
          <adc-button>
            <adc-icon
              slot="leading-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon>
            Button+Icon with long label</adc-button
          >
          <adc-button size="sm">
            <adc-icon
              slot="leading-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon>
            Small Button+Icon with long label</adc-button
          >
          <adc-button>
            Default button with very long label Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</adc-button
          >
          <adc-button size="sm">
            Small button with very long label Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</adc-button
          >
          <adc-button>
            <adc-icon
              slot="leading-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon>
            Button+Icon with very long label Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</adc-button
          >
          <adc-button size="sm">
            <adc-icon
              slot="leading-icon"
              icon="action:plus"
              outlined
              size="24"
            ></adc-icon>
            Small Button+Icon with very long label Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</adc-button
          >
        </div>
      </section>
      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Multiple icons
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          Buttons with multiple icons.
        </p>
        <div style="display:flex; gap:1rem">
          <adc-button>
            <adc-icon icon="operation:filter-alt"></adc-icon>
            <adc-icon icon="operation:filter-alt"></adc-icon>
            Label</adc-button
          >
          <adc-button>
            Label<adc-icon icon="operation:filter-alt"></adc-icon>
            <adc-icon icon="operation:filter-alt"></adc-icon
          ></adc-button>
          <adc-button>
            <adc-icon icon="operation:filter-alt"></adc-icon>
            <adc-icon icon="operation:filter-alt"></adc-icon>
            Label<adc-icon icon="operation:filter-alt"></adc-icon>
            <adc-icon icon="operation:filter-alt"></adc-icon
          ></adc-button>
        </div>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2
          style="margin: 0 1rem .5rem 0; font-weight: 500; font-size: 1.5rem; line-height: 1.5rem"
        >
          Narrow parent container
        </h2>
        <p
          style="margin-bottom: 1rem; font-weight: 400; font-size: 1rem; line-height: 1.5rem"
        >
          Button inside a constrained parent.
        </p>
        <div
          style="display:block; padding:1rem; width:100px; background-color:gray"
        >
          <!-- Replace background color with secondary token value-->
          <adc-button> Label</adc-button>
          <adc-button>
            Label<adc-icon icon="operation:filter-alt"></adc-icon>
          </adc-button>
        </div>
      </section>
    </div>`;
  },
};

export { Demo, InContext, Features, StressTests };
