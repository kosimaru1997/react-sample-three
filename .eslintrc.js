module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        project: './tsconfig.eslint.json',
        "sourceType": "module",
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        'prefer-arrow',
        "react",
        "react-hooks"
    ],
    root: true,
    "rules": {
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "import/no-default-export": "off",
      "import/prefer-default-export": "off",
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
      'error',
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true
        }
      ],
      'no-void': [
        'error',
        {
        allowAsStatement: true,
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
        blankLine: 'always',
        prev: '*',
        next: 'return',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        }
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx']
        }
      ],
      'react/jsx-props-no-spreading': [
        'error',
        {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        }
      ],
    },

    overrides: [
      {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off',
        },
      },
    ],
    settings: {
      'import/resolver': {
      node: {
          paths: ['src'],
        },
      },
    },
};
