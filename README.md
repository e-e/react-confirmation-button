[![npm][npm]][npm-url]
[![deps][deps]][deps-url]

```bash
npm install react-confirmation-button
```

**component**

```jsx
import ConfirmButton from 'react-confirmation-button';

/* ... */

<ConfirmButton
  onConfirm={() => action()}
  onCancel={() => cancelAction()}
  buttonText="Main button text"
  confirmText="Confirm button text"
  cancelText="Cancel button text"
  loadingText="Loading button text (if `once` is set)"
  buttonClass=""
  confirmClass=""
  cancelClass=""
  loadingClass=""
  once
/>;
```

**optional props (with their default values)**

```js
{
   onCancel={() => {}}
   confirmText: 'Confirm',
   cancelText: 'Cancel',
   buttonText: 'Save',
   loadingText: 'Loading'
   buttonClass: '',
   confirmClass: '',
   cancelClass: '',
   loadingClass: '',
   once: true
}
```

[npm]: https://img.shields.io/npm/v/react-confirmation-button.svg
[npm-url]: https://npmjs.com/package/react-confirmation-button
[deps]: https://david-dm.org/e-e/react-confirmation-button.svg
[deps-url]: https://david-dm.org/e-e/react-confirmation-button
