module.exports = {
  'processors': [
    'stylelint-processor-styled-components'
  ],
  'extends':    [
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  'rules':      {
    // general
    'font-family-no-duplicate-names': true,
    'font-weight-notation':           'numeric',
    'max-empty-lines':                1,
    'no-empty-first-line':            true,
    'no-eol-whitespace':              true,

    // hex
    'color-hex-case':       'lower',
    'color-hex-length':     'long',
    'color-no-invalid-hex': true,

    // block {} & css properties (f.e. color)
    'block-no-empty':             true,
    'length-zero-no-unit':        true,
    'property-case':              'lower',
    'property-no-vendor-prefix':  null,
    'value-list-max-empty-lines': 0
  }
}
