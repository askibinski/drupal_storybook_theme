export default { title: 'Blocks' };

import block from './block.twig';
import drupalAttribute from 'drupal-attribute'
import './block.css';

export const default_block = () => (
    block({
        attributes: new drupalAttribute(),
        title_attributes: new drupalAttribute(),
        plugin_id: "Some plugin",
        title_prefix: "",
        title_suffix: "",
        label: "I'm a block!",
        content: "Lorem ipsum dolor sit amet.",
        configuration: {
            provider: "Some module"
        }
    })
);
