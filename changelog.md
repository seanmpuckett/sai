## Change log

### 0.1.3

#### Breaking changes

 - remove VIA keyword as being unnecessarily obscure in function, and hardly ever useful anyway.
 - remove INITIALIZED keyword as being too hard to use without generating JS errors about what an acceptable lvalue is. Keyword DEFAULT allows similiar levels of simplification but without the side-effects of an assignment in the middle of an expression (which I don't like at all anyway).

#### Enhancements

 - fix syntax error reporting to be more descriptive of the containing file
 - expand usage of DEFAULT to allow usage in an lvalue. This sets the variable ONLY if its current value is undefined. As in `set a default 4`
 - both OVERLAY and UPDATE will now silently initialize an undefined lvalue to BLANK before attempting to merge
 - tidy up example code

#### Ponderables

 - considering removal of pipe accessor as it can very easily parse in a way that is unclear

### 0.1.2 

- Added a change-log
- Added 02.Parameters document file
- Updated other documents
- Added comments to sailib.js describing what things do
