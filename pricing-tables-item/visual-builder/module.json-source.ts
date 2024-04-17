import { type Metadata, type PricingTableAttrs } from '@divi/types';

/**
 * Pricing Table Meta Data.
 *
 * Note: The module metadata will be used to generate `module.json` upon build.
 * Variable name must end with `ModuleMetaData` to be picked up by the build script.
 */
const pricingTableModuleMetaData: Metadata.Values<PricingTableAttrs> = {
  name:        'divi/pricing-table',
  d4Shortcode: 'et_pb_pricing_table',
  title:       'Pricing Table',
  titles:      'Pricing Table Items',
  moduleIcon:  'divi/module-pricing-table',
  category:    'child-module',
  attributes:  {
    module: {
      type:     'object',
      selector: '{{selector}}',
      settings: {
        decoration: {
          background: {},
          boxShadow:  {},
          border:     {
            priority: 85,
          },
          conditions: {},
          disabledOn: {},
          filters:    {},
          overflow:   {},
          position:   {},
          scroll:     {},
          spacing:    {
            component: {
              props: {
                fields: {
                  margin: {
                    render: false,
                  },
                },
              },
            },
          },
          transform:  {},
          transition: {},
          zIndex:     {},
        },
        advanced: {
          featured: {
            groupType:  'group',
            panel:      'design',
            priority:   10,
            groupName:  'layout',
            groupLabel: 'Layout',
            component:  {
              name:  'divi/composite',
              props: {
                groupLabel: 'Layout',
                fields:     {
                  featured: {
                    render:      true,
                    label:       'Make This Table Featured',
                    description: 'Featuring a table will make it stand out from the rest.',
                    features:    {
                      responsive: false,
                      hover:      false,
                      sticky:     false,
                    },

                    // Built-in component.
                    component: {
                      name: 'divi/toggle',
                    },
                  },
                },
              },
            },
          },
          text: {
            priority:  18,
            component: {
              props: {
                fields: {
                  color: {
                    render: false,
                  },
                },
              },
            },
          },
          link: {},
        },
      },
      styleProps: {
        background: {
          selector: '{{selector}}.et_pb_pricing_table',
        },
        border: {
          selector: '.et_pb_pricing .et_pb_pricing_table{{selector}}',
        },
        spacing: {
          selector:          '.et_pb_pricing {{selector}} .et_pb_pricing_heading,.et_pb_pricing {{selector}} .et_pb_pricing_content_top,.et_pb_pricing {{selector}} .et_pb_pricing_content',
          propertySelectors: {
            desktop: {
              value: {
                'padding-left':   '.et_pb_pricing {{selector}} .et_pb_pricing_heading,.et_pb_pricing {{selector}} .et_pb_pricing_content_top,.et_pb_pricing {{selector}} .et_pb_pricing_content,{{selector}} .et_pb_button_wrapper',
                'padding-right':  '.et_pb_pricing {{selector}} .et_pb_pricing_heading,.et_pb_pricing {{selector}} .et_pb_pricing_content_top,.et_pb_pricing {{selector}} .et_pb_pricing_content,{{selector}} .et_pb_button_wrapper',
                'padding-bottom': '.et_pb_pricing {{selector}} .et_pb_pricing_heading,.et_pb_pricing {{selector}} .et_pb_pricing_content_top,.et_pb_pricing {{selector}} .et_pb_pricing_content,.et_pb_pricing {{selector}}',
              },
            },
          },
          important: true,
        },
      },
    },
    currencyFrequency: {
      type:     'object',
      selector: '{{selector}} .et_pb_frequency',
      settings: {
        innerContent: {
          groupType: 'group-items',
          items:     {
            currencyFrequencyTitle: {
              groupSlug:   'contentText',
              priority:    30,
              render:      true,
              subName:     'currency',
              label:       'Currency',
              description: 'Input your value to action title here.',
              features:    {
                dynamicContent: {
                  type: 'text',
                },
                sticky: false,
              },
              component: {
                name: 'divi/text',
                type: 'field',
              },
            },
            per: {
              groupSlug:   'contentText',
              priority:    40,
              render:      true,
              subName:     'per',
              label:       'Frequency',
              description: 'If your pricing is subscription based, input the subscription payment cycle here.',
              features:    {
                dynamicContent: {
                  type: 'text',
                },
                sticky: false,
              },
              component: {
                name: 'divi/text',
                type: 'field',
              },
            },
          },
        },
        decoration: {
          font: {
            priority:  24,
            component: {
              props: {
                groupLabel: 'Currency & Frequency Text',
                fieldLabel: 'Currency & Frequency',

                fields: {
                  // Need to be set false because elementType heading by default set headingLevel.render to `true`
                  headingLevel: {
                    render: false,
                  },
                },
              },
            },
          },
        },
      },
      attributes: {
        class: 'et_pb_dollar_sign',
      },
      tagName:           'span',
      elementType:       'heading',
      inlineEditor:      'plainText',
      childrenSanitizer: 'et_core_esc_previously',
      styleProps:        {
        selector: '{{selector}} .et_pb_frequency, {{selector}} .et_pb_dollar_sign',
        font:     {
          selector:  '{{selector}} .et_pb_et_price .et_pb_dollar_sign, {{selector}} .et_pb_et_price .et_pb_frequency',
          important: {
            font: {
              desktop: {
                value: {
                  color: true,
                },
              },
            },
          },
        },
      },
    },
    subtitle: {
      type:     'object',
      selector: '{{selector}} .et_pb_best_value',
      settings: {
        innerContent: {
          groupType: 'group-item',
          item:      {
            description: 'Define a sub title for the table if desired.',
            groupSlug:   'contentText',
            label:       'Subtitle',
            priority:    20,
            render:      true,

            features: {
              dynamicContent: {
                type: 'text',
              },
              sticky: false,
            },

            // Built-in component.
            component: {
              name: 'divi/text',
              type: 'field',
            },
          },
        },
        decoration: {
          font: {
            priority:  22,
            component: {
              props: {
                groupLabel: 'Subtitle Text',
                fieldLabel: 'Subtitle',
                fields:     {
                  // Need to be set false because elementType heading by default set headingLevel.render to `true`
                  headingLevel: {
                    render: false,
                  },
                },
              },
            },
          },
        },
      },
      attributes: {
        class: 'et_pb_best_value',
      },
      tagName:           'span',
      elementType:       'heading',
      inlineEditor:      'plainText',
      childrenSanitizer: 'et_core_esc_previously',
      styleProps:        {
        selector: '{{selector}} .et_pb_best_value',
        font:     {
          selector:  '{{selector}} .et_pb_pricing_heading .et_pb_best_value',
          important: {
            font: {
              desktop: {
                value: {
                  color: true,
                },
              },
            },
          },
        },
      },
    },
    title: {
      type:     'object',
      selector: '{{selector}} .et_pb_pricing_heading h2,{{selector}} .et_pb_pricing_heading h1.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h3.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h4.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h5.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h6.et_pb_pricing_title',
      settings: {
        innerContent: {
          groupType: 'group-item',
          item:      {
            description: 'Define a title for the pricing table.',
            groupSlug:   'contentText',
            label:       'Title',
            priority:    10,
            render:      true,

            features: {
              dynamicContent: {
                type: 'text',
              },
              sticky: false,
            },

            // Built-in component.
            component: {
              name: 'divi/text',
              type: 'field',
            },
          },
        },
        decoration: {
          background: {
            groupType: 'group-item',
            item:      {
              groupSlug:   'designTitleText',
              subName:     'color',
              label:       'Table Header Background Color',
              description: '',
              render:      true,
              priority:    10,

              // Built-in component.
              component: {
                type: 'field',
                name: 'divi/color-picker',
              },
            },
          },
          font: {
            groupType: 'group-item',
            item:      {
              groupSlug: 'designTitleText',
              priority:  20,
              render:    true,

              // Built-in component.
              component: {
                name:  'divi/font',
                type:  'group',
                props: {
                  grouped:    false,
                  fieldLabel: 'Title',
                  fields:     {
                    headingLevel: {
                      render: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      attributes: {
        class: 'et_pb_pricing_title',
      },
      tagName:           'h2',
      elementType:       'heading',
      inlineEditor:      'plainText',
      childrenSanitizer: 'et_core_esc_previously',
      styleProps:        {
        selector:   '{{selector}} .et_pb_pricing_heading h2,{{selector}} .et_pb_pricing_heading h1.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h3.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h4.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h5.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h6.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h2,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h1.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h3.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h4.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h5.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h6.et_pb_pricing_title',
        background: {
          selector: '.et_pb_pricing {{selector}}.et_pb_pricing_table .et_pb_pricing_heading',
        },
        font: {
          selector:  '{{selector}} .et_pb_pricing_heading h2,{{selector}} .et_pb_pricing_heading h1.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h3.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h4.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h5.et_pb_pricing_title,{{selector}} .et_pb_pricing_heading h6.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h2,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h1.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h3.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h4.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h5.et_pb_pricing_title,{{selector}}.et_pb_featured_table .et_pb_pricing_heading h6.et_pb_pricing_title',
          important: true,
        },
      },
    },
    price: {
      type:     'object',
      selector: '{{selector}} .et_pb_et_price .et_pb_sum',
      settings: {
        innerContent: {
          groupType: 'group-item',
          item:      {
            description: 'Input the value of the product here.',
            groupSlug:   'contentText',
            label:       'Price',
            priority:    50,
            render:      true,

            features: {
              dynamicContent: {
                type: 'text',
              },
              sticky: false,
            },
            component: {
              name: 'divi/text',
              type: 'field',
            },
          },
        },
        decoration: {
          background: {
            groupType: 'group-item',
            item:      {
              groupSlug:   'designPriceText',
              subName:     'color',
              label:       'Pricing Area Background Color',
              description: 'Pick a color to use for the background area that appears behind the pricing text.',
              render:      true,
              priority:    10,

              // Built-in component.
              component: {
                type: 'field',
                name: 'divi/color-picker',
              },
            },
          },
          font: {
            groupType: 'group-item',
            item:      {
              groupSlug: 'designPriceText',
              render:    true,
              priority:  20,

              // Built-in component.
              component: {
                name:  'divi/font',
                type:  'group',
                props: {
                  grouped:    false,
                  fieldLabel: 'Price',
                },
              },
            },
          },
          border: {
            groupType: 'group-item',
            item:      {
              groupSlug: 'designPriceText',
              priority:  30,
              render:    true,

              // Built-in component.
              component: {
                name: 'divi/border',
                type: 'group',

                props: {
                  grouped: false,
                },
              },
            },
          },
        },
      },
      attributes: {
        class: 'et_pb_sum',
      },
      tagName:           'span',
      elementType:       'heading',
      inlineEditor:      'plainText',
      childrenSanitizer: 'et_core_esc_previously',
      styleProps:        {
        selector: '{{selector}} .et_pb_et_price .et_pb_sum,{{selector}} .et_pb_pricing_content_top',
        font:     {
          selector:  '{{selector}} .et_pb_et_price .et_pb_sum',
          important: {
            font: {
              desktop: {
                value: {
                  color: true,
                },
              },
            },
          },
        },
        border: {
          selector: '.et_pb_pricing {{selector}} .et_pb_pricing_content_top',
        },
        background: {
          selector: '{{selector}} .et_pb_pricing_content_top',
        },
      },
    },
    button: {
      type:     'object',
      selector: '{{selector}} .et_pb_button',
      settings: {
        innerContent: {
          groupType: 'into-multiple-groups',
          groups:    {
            text: {
              groupType: 'group-item',
              item:      {
                description: 'Input your desired button text, or leave blank for no button.',
                groupSlug:   'contentText',
                label:       'Button',
                priority:    60,
                render:      true,
                subName:     'text',

                features: {
                  dynamicContent: {
                    type: 'text',
                  },
                  sticky: false,
                },

                // Built-in component.
                component: {
                  name: 'divi/text',
                  type: 'field',
                },
              },
            },
          },
        },
        decoration: {
          background: {},
          border:     {},
          boxShadow:  {},
          button:     {
            component: {
              props: {
                fields: {
                  alignment: {
                    description:     'Align you button to the left, right or center of the module.',
                    visible:         true,
                    multipleChoices: false,
                    component:       {
                      props: {
                        options: {
                          left: {
                            icon: 'divi/align-left',
                          },
                          center: {
                            icon: 'divi/align-center',
                          },
                          right: {
                            icon: 'divi/align-right',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          font:    {},
          spacing: {},
        },
      },
      attributes: {
        class: 'et_pb_pricing_table_button',
      },
      elementType:  'button',
      elementProps: {
        hasWrapper: true,
      },
      styleProps: {
        selector: '.et_pb_pricing {{selector}} .et_pb_pricing_table_button.et_pb_button',
        border:   {
          important: {
            desktop: {
              value: {
                'border-width': true,
              },
            },
          },
        },
        button: {
          propertySelectors: {
            desktop: {
              value: {
                'text-align': '.et_pb_pricing {{selector}} .et_pb_button_wrapper',
              },
            },
          },
        },
        font: {
          selector:  '.et_pb_pricing {{selector}} .et_pb_pricing_table_button.et_pb_button',
          important: {
            font: true,
          },
        },
        spacing: {
          selector:  '.et_pb_pricing {{selector}} .et_pb_pricing_table_button.et_pb_button',
          important: {
            desktop: {
              value: {
                padding: true,
              },
            },
          },
        },
      },
    },
    excluded: {
      type:     'object',
      selector: '{{selector}} ul.et_pb_pricing li.et_pb_not_available,{{selector}} ul.et_pb_pricing li.et_pb_not_available span,{{selector}} ul.et_pb_pricing li.et_pb_not_available a',
      settings: {
        decoration: {
          font: {
            priority:  24,
            component: {
              props: {
                groupLabel: 'Excluded Item Text',
                fieldLabel: 'Excluded Item',
              },
            },
          },
        },
      },
      styleProps: {
        selector: '{{selector}} ul.et_pb_pricing li.et_pb_not_available,{{selector}} ul.et_pb_pricing li.et_pb_not_available span,{{selector}} ul.et_pb_pricing li.et_pb_not_available a',
        font:     {
          selector: '{{selector}} ul.et_pb_pricing li.et_pb_not_available,{{selector}} ul.et_pb_pricing li.et_pb_not_available span,{{selector}} ul.et_pb_pricing li.et_pb_not_available a',
        },
      },
    },
    content: {
      type:        'object',
      selector:    '{{selector}} .et_pb_pricing_content',
      elementType: 'content',
      settings:    {
        innerContent: {
          groupType: 'group-item',
          item:      {
            description: 'Input the main text content for your module here.',
            groupSlug:   'contentText',
            label:       'Body',
            priority:    70,
            render:      true,

            features: {
              sticky: false,
            },

            // Built-in component.
            component: {
              name: 'divi/richtext',
              type: 'field',
            },
          },
        },
        decoration: {
          bodyFont: {
            priority:  21,
            component: {
              props: {
                groups: {
                  body: {
                    fieldLabel: 'Body',
                  },
                },
              },
            },
          },
        },
        advanced: {
          bulletColor: {
            groupType:  'group',
            panel:      'design',
            priority:   15,
            groupName:  'bullet',
            groupLabel: 'Bullet',
            component:  {
              name:  'divi/composite',
              props: {
                groupLabel: 'Bullet',
                fields:     {
                  bulletColor: {
                    render:      true,
                    label:       'Bullet Color',
                    description: 'Pick a color to use for the bullets that appear next to each list item within the pricing table\'s feature area.',
                    component:   {
                      name: 'divi/color-picker',
                    },
                  },
                },
              },
            },
          },
        },
      },
      styleProps: {
        selector: '{{selector}} ul.et_pb_pricing li',
        bodyFont: {
          selector: '{{selector}} ul.et_pb_pricing li',
        },
      },
    },
  },
  customCssFields: {
    pricingHeading: {
      label:          'Pricing Heading',
      subName:        'pricingHeading',
      selectorSuffix: ' .et_pb_pricing_heading',
    },
    pricingTitle: {
      label:          'Pricing Title',
      subName:        'pricingTitle',
      selectorSuffix: ' .et_pb_pricing_heading h2',
    },
    pricingSubtitle: {
      label:          'Pricing Subtitle',
      subName:        'pricingSubtitle',
      selectorSuffix: ' .et_pb_pricing_heading .et_pb_best_value',
    },
    pricingTop: {
      label:          'Pricing Top',
      subName:        'pricingTop',
      selectorSuffix: ' .et_pb_pricing_content_top',
    },
    price: {
      label:          'Price',
      subName:        'price',
      selectorSuffix: ' .et_pb_et_price',
    },
    currency: {
      label:          'Currency',
      subName:        'currency',
      selectorSuffix: ' .et_pb_dollar_sign',
    },
    frequency: {
      label:          'Frequency',
      subName:        'frequency',
      selectorSuffix: ' .et_pb_frequency',
    },
    pricingContent: {
      label:          'Pricing Content',
      subName:        'pricingContent',
      selectorSuffix: ' .et_pb_pricing_content',
    },
    pricingItem: {
      label:          'Pricing Item',
      subName:        'pricingItem',
      selectorSuffix: ' ul.et_pb_pricing li',
    },
    pricingItemExcluded: {
      label:          'Excluded Item',
      subName:        'pricingItemExcluded',
      selectorSuffix: ' ul.et_pb_pricing li.et_pb_not_available',
    },
    pricingButton: {
      label:          'Pricing Button',
      subName:        'pricingButton',
      selectorSuffix: ' .et_pb_pricing_table_button',
    },
  },
  settings: {
    content:  'auto',
    design:   'auto',
    advanced: 'auto',
    groups:   {

      // Content > Text
      contentText: {
        panel:         'content',
        priority:      10,
        groupName:     'text',
        multiElements: true,
        component:     {
          name:  'divi/composite',
          props: {
            groupLabel: 'Text',
          },
        },
      },

      // Design > Title Text
      designTitleText: {
        panel:     'design',
        priority:  20,
        groupName: 'titleText',
        component: {
          name:  'divi/composite',
          props: {
            groupLabel: 'Title Text',
          },
        },
      },

      // Design > Price Text
      designPriceText: {
        panel:     'design',
        priority:  23,
        groupName: 'priceText',
        component: {
          name:  'divi/composite',
          props: {
            groupLabel: 'Price Text',
          },
        },
      },
    },
  },
};

export {
  pricingTableModuleMetaData,
};
