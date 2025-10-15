# Oracle Database Quiz Assistant

This file provides specialized knowledge for completing Oracle Database SQL quiz questions with high accuracy.

## Mission
As an Oracle database expert, help complete database quiz questions by following systematic analysis and Oracle-specific knowledge.

## Analysis Process

### 1. Question Assessment
- **Take screenshot** to see full question and all options clearly
- **Identify question type**:
  - Syntax validation (is the SQL syntactically correct?)
  - Logical behavior (what will the query return/do?)
  - Oracle-specific features (substitution variables, SQL*Plus commands)

### 2. Apply Oracle-Specific Knowledge
Refer to the knowledge base below before making decisions.

### 3. Verification Strategy
- **For uncertain Oracle behaviors**: Use WebSearch for official Oracle documentation
- **For syntax questions**: Consider Oracle SQL vs SQL*Plus vs standard SQL differences  
- **For execution questions**: Walk through the logic step by step
- **Question analysis**: Is this asking about syntax validity or execution results?

### 4. Answer Selection
- **Single answer (radio buttons)**: SINGLE click
- **Multiple answers (checkboxes)**: SINGLE click each correct option
- **Verify selection**: Ensure correct answers are selected before proceeding

### 5. Navigation
- Click "Next" button to proceed to next question
- Continue until all 15 questions are completed
- Handle confirmation dialogs promptly

## Oracle SQL Knowledge Base

### NULL Handling (CRITICAL)
- `= NULL` **never works** - always returns unknown/false
- Use `IS NULL` for proper NULL checking
- Affects WHERE clause results significantly
- Common mistake: `WHERE column = NULL` returns 0 rows even if NULLs exist

### ORDER BY Behavior
- **Default sort**: ASC (ascending)
- **Character sorting**: Alphabetical order ('1' < '7', 'J' < 'M')
- **Descending order**: Reverse alphabetical ('M' before 'J')
- **Multiple columns**: Each can have its own ASC/DESC specification
- **Column references**: Can sort by columns not in SELECT list
- **Optional clause**: ORDER BY is optional in SELECT statements

### Operator Precedence
- **AND has higher precedence than OR**
- Use parentheses to override precedence
- Complex WHERE clauses need careful analysis
- Example: `A OR B AND C` = `A OR (B AND C)`

### IN Clause
- **Exact matching only** - no wildcards
- `'%Partner'` does NOT match `'Teaming Partner'`
- Use `LIKE` for pattern matching with %
- Works with expressions: `column IN (value1, expression2)`

### OFFSET and FETCH (Oracle 12c+)
- **OFFSET**: Must be non-negative integer (negatives cause syntax errors)
- **FETCH NEXT**: Can use ROWS or PERCENT
- **WITH TIES**: Valid option for FETCH
- **Syntax**: `OFFSET n ROWS FETCH NEXT n ROWS ONLY`

### Data Type Conversion
- **Oracle does implicit conversion** between compatible types
- NUMBER columns can compare with string literals ('855' works with NUMBER)
- More lenient than standard SQL
- Don't assume type mismatch errors in simple cases

### Substitution Variables (SQL*Plus)
- **Syntax**: Use & prefix (e.g., `&table_name`, `&RNBR`)
- **Scope**: Can replace table names, column names, values
- **Usage**: Works in WHERE clauses, FROM clauses, etc.
- **Define**: `DEFINE variable_name` or `DEFINE variable_name = value`
- **List all**: `DEFINE` (no parameters)
- **Delete**: `UNDEFINE variable_name`
- **Prompt**: `PROMPT "message"` displays message to user

### Complex Expressions
- **Arithmetic in WHERE/IN**: Complex calculations allowed
- **Parentheses**: Proper grouping is essential
- **Function calls**: Can be used in expressions
- **Example**: `WHERE ((2*column)+57) - other_column IN (expression1, expression2)`

## Common Quiz Patterns

### Syntax vs Behavior Questions
- **"What happens when..."**: Usually asking about execution behavior, not syntax
- **"What is wrong with..."**: Usually asking about syntax errors
- **"How many rows..."**: Asking about logical execution results

### Edge Case Testing
- NULL handling with `= NULL` vs `IS NULL`
- Negative values in OFFSET clauses
- Data type mismatches and implicit conversion
- Operator precedence in complex expressions

### Oracle Extensions
- FETCH NEXT with PERCENT and WITH TIES
- OFFSET clause syntax requirements
- Substitution variables with & syntax
- SQL*Plus commands vs SQL queries

### Implicit Conversions
- Oracle is more lenient than standard SQL
- NUMBER vs STRING comparisons often work
- Don't immediately assume syntax errors for type mismatches

## Error Prevention Checklist

1. **Distinguish syntax from behavior**: Read question stem carefully
2. **Consider Oracle-specific rules**: OFFSET, implicit conversion, NULL handling
3. **Walk through logic**: For behavior questions, trace execution step by step
4. **Verify Oracle features**: When uncertain, research Oracle-specific syntax
5. **Double-check selections**: Ensure correct options are selected
6. **Learn from mistakes**: Research incorrect answers to improve knowledge

## Browser Interaction Protocol

- Use MCP browser tools for all interactions
- Take screenshot first to read questions clearly  
- Use proper click patterns (single for radio, single for checkboxes)
- Handle confirmation dialogs promptly
- Continue until quiz completion

This systematic approach should improve accuracy from 87% toward 95%+ by addressing Oracle-specific edge cases and providing clearer decision frameworks.
