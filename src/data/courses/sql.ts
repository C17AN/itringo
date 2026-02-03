import type { Course } from '../../types';

export const sqlCourse: Course = {
  "id": "sql",
  "role": "backend",
  "title": "SQL",
  "title_ko": "SQL",
  "icon": "Database",
  "chapters": [
    {
      "id": "sql-basics",
      "title": "Basic Queries",
      "title_ko": "기초 쿼리",
      "units": [
        {
          "id": "sql-select",
          "title": "Retrieving Data",
          "title_ko": "데이터 조회",
          "description": "SELECT statement and filtering.",
          "description_ko": "SELECT 문과 필터링",
          "questions": [
            {
              "id": "q-sql-1",
              "type": "multiple-choice",
              "question": "Which clause is used to filter records?",
              "question_ko": "레코드를 필터링하기 위해 사용하는 절은?",
              "codeSnippet": "SELECT * FROM users ____ age > 18;",
              "options": [
                {
                  "id": "opt1",
                  "text": "FILTER"
                },
                {
                  "id": "opt2",
                  "text": "HAVING"
                },
                {
                  "id": "opt3",
                  "text": "WHERE"
                },
                {
                  "id": "opt4",
                  "text": "LIKE"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "The WHERE clause is used to filter records.",
              "explanation_ko": "WHERE 절은 특정 조건을 충족하는 레코드만 추출할 때 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_where.asp"
            },
            {
              "id": "q-sql-select-2",
              "type": "multiple-choice",
              "question": "How do you select all columns from a table named \"employees\"?",
              "question_ko": "\"employees\" 테이블의 모든 컬럼을 선택하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "SELECT * FROM employees"
                },
                {
                  "id": "opt2",
                  "text": "SELECT ALL FROM employees"
                },
                {
                  "id": "opt3",
                  "text": "SELECT employees"
                },
                {
                  "id": "opt4",
                  "text": "SHOW employees"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The asterisk (*) is used as a wildcard to select all columns in SQL.",
              "explanation_ko": "SQL에서 별표(*)는 모든 컬럼을 선택하기 위한 와일드카드로 사용됩니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_select.asp"
            },
            {
              "id": "q-sql-distinct",
              "type": "multiple-choice",
              "question": "Which keyword is used to return only unique values?",
              "question_ko": "중복된 값을 제외하고 고유한 값만 반환하기 위해 사용하는 키워드는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "UNIQUE"
                },
                {
                  "id": "opt2",
                  "text": "DISTINCT"
                },
                {
                  "id": "opt3",
                  "text": "DIFFERENT"
                },
                {
                  "id": "opt4",
                  "text": "SINGLE"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The DISTINCT keyword is used to return only distinct (different) values.",
              "explanation_ko": "DISTINCT 키워드는 중복을 제거하고 고유한 값만 반환할 때 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_distinct.asp"
            },
            {
              "id": "q-sql-and-or",
              "type": "multiple-choice",
              "question": "Which operator is used to display a record if BOTH conditions are true?",
              "question_ko": "두 조건이 모두 참일 때 레코드를 표시하는 연산자는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "OR"
                },
                {
                  "id": "opt2",
                  "text": "AND"
                },
                {
                  "id": "opt3",
                  "text": "BOTH"
                },
                {
                  "id": "opt4",
                  "text": "PLUS"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The AND operator displays a record if all the conditions separated by AND are TRUE.",
              "explanation_ko": "AND 연산자는 나열된 모든 조건이 참일 때만 레코드를 표시합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_and_or.asp"
            },
            {
              "id": "q-sql-order-by",
              "type": "multiple-choice",
              "question": "Which keyword is used to sort the result-set in descending order?",
              "question_ko": "결과 집합을 내림차순으로 정렬하기 위해 사용하는 키워드는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "DESC"
                },
                {
                  "id": "opt2",
                  "text": "DESCENDING"
                },
                {
                  "id": "opt3",
                  "text": "DOWN"
                },
                {
                  "id": "opt4",
                  "text": "REVERSE"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.",
              "explanation_ko": "ORDER BY는 기본적으로 오름차순 정렬을 수행하며, 내림차순 정렬을 위해서는 DESC 키워드를 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_orderby.asp"
            },
            {
              "id": "q-sql-null",
              "type": "multiple-choice",
              "question": "How do you test for NULL values in a column?",
              "question_ko": "컬럼의 값이 NULL인지 확인하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "IS NULL"
                },
                {
                  "id": "opt2",
                  "text": "= NULL"
                },
                {
                  "id": "opt3",
                  "text": "IF NULL"
                },
                {
                  "id": "opt4",
                  "text": "EXISTS NULL"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "NULL values cannot be tested with comparison operators (=, <>, etc.). You must use IS NULL or IS NOT NULL.",
              "explanation_ko": "NULL 값은 비교 연산자(=, <>)로 테스트할 수 없으며, 반드시 IS NULL 또는 IS NOT NULL을 사용해야 합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_null_values.asp"
            },
            {
              "id": "q-sql-in",
              "type": "multiple-choice",
              "question": "Which operator allows you to specify multiple values in a WHERE clause?",
              "question_ko": "WHERE 절에서 여러 값을 지정할 수 있게 해주는 연산자는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "WITHIN"
                },
                {
                  "id": "opt2",
                  "text": "IN"
                },
                {
                  "id": "opt3",
                  "text": "MANY"
                },
                {
                  "id": "opt4",
                  "text": "MULTIPLE"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The IN operator allows you to specify multiple values in a WHERE clause. It is a shorthand for multiple OR conditions.",
              "explanation_ko": "IN 연산자는 WHERE 절에서 여러 값을 지정할 때 사용하며, 여러 개의 OR 조건을 짧게 쓴 것과 같습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_in.asp"
            },
            {
              "id": "q-sql-between",
              "type": "multiple-choice",
              "question": "Which operator selects values within a given range?",
              "question_ko": "주어진 범위 내의 값을 선택하는 연산자는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "RANGE"
                },
                {
                  "id": "opt2",
                  "text": "BETWEEN"
                },
                {
                  "id": "opt3",
                  "text": "FROM-TO"
                },
                {
                  "id": "opt4",
                  "text": "WITHIN"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.",
              "explanation_ko": "BETWEEN 연산자는 주어진 범위 내의 값을 선택하며, 숫자, 텍스트, 날짜 등에 사용할 수 있습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_between.asp"
            },
            {
              "id": "q-sql-like",
              "type": "multiple-choice",
              "question": "In a LIKE operator, which wildcard character represents zero, one, or multiple characters?",
              "question_ko": "LIKE 연산자에서 0개 이상의 문자를 나타내는 와일드카드 문자는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "_"
                },
                {
                  "id": "opt2",
                  "text": "*"
                },
                {
                  "id": "opt3",
                  "text": "%"
                },
                {
                  "id": "opt4",
                  "text": "?"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "In SQL, % represents zero, one, or multiple characters, while _ represents a single character.",
              "explanation_ko": "SQL에서 %는 0개 이상의 문자를, _는 정확히 하나의 문자를 나타냅니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_like.asp"
            },
            {
              "id": "q-sql-limit",
              "type": "multiple-choice",
              "question": "Which clause is used to specify the number of records to return?",
              "question_ko": "반환할 레코드 수를 지정하기 위해 사용하는 절은? (PostgreSQL/MySQL 기준)",
              "options": [
                {
                  "id": "opt1",
                  "text": "TOP"
                },
                {
                  "id": "opt2",
                  "text": "LIMIT"
                },
                {
                  "id": "opt3",
                  "text": "FETCH"
                },
                {
                  "id": "opt4",
                  "text": "ROWCOUNT"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The LIMIT clause is used in MySQL and PostgreSQL to specify the number of records to return. SQL Server uses TOP.",
              "explanation_ko": "MySQL과 PostgreSQL에서는 LIMIT 절을 사용하여 반환할 레코드 수를 제한합니다. SQL Server에서는 TOP을 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_top.asp"
            },
            {
              "id": "q-sql-alias",
              "type": "multiple-choice",
              "question": "What keyword is used to give a table or a column a temporary name?",
              "question_ko": "테이블이나 컬럼에 임시 이름을 부여하기 위해 사용하는 키워드는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "AS"
                },
                {
                  "id": "opt2",
                  "text": "NAME"
                },
                {
                  "id": "opt3",
                  "text": "ALIAS"
                },
                {
                  "id": "opt4",
                  "text": "SET"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "SQL aliases are used to give a table, or a column in a table, a temporary name using the AS keyword.",
              "explanation_ko": "AS 키워드를 사용하여 테이블이나 컬럼에 알리어스(임시 이름)를 부여할 수 있습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_alias.asp"
            }
          ]
        },
        {
          "id": "sql-join",
          "title": "Joins",
          "title_ko": "조인",
          "description": "Combining rows from two or more tables.",
          "description_ko": "두 개 이상의 테이블 결합하기",
          "questions": [
            {
              "id": "q-sql-join-1",
              "type": "multiple-choice",
              "question": "Which JOIN returns all records when there is a match in either left or right table?",
              "question_ko": "왼쪽 또는 오른쪽 테이블에 일치하는 항목이 있을 때 모든 레코드를 반환하는 JOIN은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "INNER JOIN"
                },
                {
                  "id": "opt2",
                  "text": "LEFT JOIN"
                },
                {
                  "id": "opt3",
                  "text": "RIGHT JOIN"
                },
                {
                  "id": "opt4",
                  "text": "FULL OUTER JOIN"
                }
              ],
              "correctAnswerId": "opt4",
              "explanation": "FULL OUTER JOIN returns all records when there is a match in left (table1) or right (table2) table records.",
              "explanation_ko": "FULL OUTER JOIN은 왼쪽이나 오른쪽 테이블 중 하나라도 일치하는 것이 있으면 모든 레코드를 반환합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_join_full.asp"
            },
            {
              "id": "q-sql-inner-join",
              "type": "multiple-choice",
              "question": "Which JOIN returns records that have matching values in both tables?",
              "question_ko": "두 테이블 모두에 일치하는 값이 있는 레코드만 반환하는 JOIN은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "INNER JOIN"
                },
                {
                  "id": "opt2",
                  "text": "LEFT JOIN"
                },
                {
                  "id": "opt3",
                  "text": "CROSS JOIN"
                },
                {
                  "id": "opt4",
                  "text": "OUTER JOIN"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "INNER JOIN selects records that have matching values in both tables.",
              "explanation_ko": "INNER JOIN은 두 테이블 모두에서 일치하는 값이 있는 행들만 결합하여 반환합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_join_inner.asp"
            },
            {
              "id": "q-sql-left-join",
              "type": "multiple-choice",
              "question": "Which JOIN returns all records from the left table, and the matched records from the right table?",
              "question_ko": "왼쪽 테이블의 모든 레코드와 오른쪽 테이블의 일치하는 레코드를 반환하는 JOIN은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "RIGHT JOIN"
                },
                {
                  "id": "opt2",
                  "text": "INNER JOIN"
                },
                {
                  "id": "opt3",
                  "text": "LEFT JOIN"
                },
                {
                  "id": "opt4",
                  "text": "FULL JOIN"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "LEFT JOIN returns all records from the left table (table1), and the matched records from the right table (table2).",
              "explanation_ko": "LEFT JOIN은 왼쪽 테이블의 모든 행과, 오른쪽 테이블에서 조건에 일치하는 행을 반환합니다. 일치하는 행이 없으면 NULL로 채워집니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_join_left.asp"
            },
            {
              "id": "q-sql-cross-join",
              "type": "multiple-choice",
              "question": "Which JOIN returns the Cartesian product of the two tables?",
              "question_ko": "두 테이블의 카테시안 곱(모든 가능한 조합)을 반환하는 JOIN은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "INNER JOIN"
                },
                {
                  "id": "opt2",
                  "text": "LEFT JOIN"
                },
                {
                  "id": "opt3",
                  "text": "CROSS JOIN"
                },
                {
                  "id": "opt4",
                  "text": "SELF JOIN"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "CROSS JOIN returns the Cartesian product of the sets of rows from the joined tables.",
              "explanation_ko": "CROSS JOIN은 두 테이블의 모든 행 조합을 반환하는 카테시안 곱 연산을 수행합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_join_cross.asp"
            },
            {
              "id": "q-sql-union",
              "type": "multiple-choice",
              "question": "What is the difference between UNION and UNION ALL?",
              "question_ko": "UNION과 UNION ALL의 차이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "UNION ALL includes duplicates, UNION does not",
                  "text_ko": "UNION ALL은 중복을 포함하고, UNION은 포함하지 않음"
                },
                {
                  "id": "opt2",
                  "text": "UNION includes duplicates, UNION ALL does not",
                  "text_ko": "UNION은 중복을 포함하고, UNION ALL은 포함하지 않음"
                },
                {
                  "id": "opt3",
                  "text": "UNION is faster than UNION ALL",
                  "text_ko": "UNION이 UNION ALL보다 빠름"
                },
                {
                  "id": "opt4",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "UNION removes duplicate rows from the result set, while UNION ALL keeps them. UNION ALL is generally faster because it doesn't need to perform a duplicate removal step.",
              "explanation_ko": "UNION은 중복된 행을 제거하지만, UNION ALL은 중복을 포함한 모든 행을 반환합니다. 중복 제거 과정이 없는 UNION ALL이 보통 더 빠릅니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_union.asp"
            },
            {
              "id": "q-sql-self-join",
              "type": "multiple-choice",
              "question": "What is a self-join?",
              "question_ko": "셀프 조인(Self-Join)이란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Joining a table to itself",
                  "text_ko": "자기 자신과 조인하기"
                },
                {
                  "id": "opt2",
                  "text": "A join that doesn't require a condition",
                  "text_ko": "조건이 필요 없는 조인"
                },
                {
                  "id": "opt3",
                  "text": "A join between two identical tables",
                  "text_ko": "두 개의 동일한 테이블 간의 조인"
                },
                {
                  "id": "opt4",
                  "text": "An automatic join performed by the DB",
                  "text_ko": "DB에 의해 자동으로 수행되는 조인"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A self-join is a regular join, but the table is joined with itself.",
              "explanation_ko": "셀프 조인은 하나의 테이블을 자기 자신과 조인하는 것을 말합니다. 주로 계층 구조를 표현할 때 사용됩니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_join_self.asp"
            },
            {
              "id": "q-sql-intersect",
              "type": "multiple-choice",
              "question": "Which set operator returns only the rows that are present in both result sets?",
              "question_ko": "두 결과 집합 모두에 존재하는 행만 반환하는 집합 연산자는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "UNION"
                },
                {
                  "id": "opt2",
                  "text": "EXCEPT"
                },
                {
                  "id": "opt3",
                  "text": "INTERSECT"
                },
                {
                  "id": "opt4",
                  "text": "MINUS"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "The INTERSECT operator returns only common rows from both SELECT statements.",
              "explanation_ko": "INTERSECT 연산자는 두 SELECT 문의 결과 집합에서 공통으로 존재하는 행(교집합)만 반환합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-union.html"
            },
            {
              "id": "q-sql-except",
              "type": "multiple-choice",
              "question": "Which operator returns rows from the first query that are NOT present in the second query?",
              "question_ko": "첫 번째 쿼리에는 있지만 두 번째 쿼리에는 없는 행을 반환하는 연산자는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "UNION"
                },
                {
                  "id": "opt2",
                  "text": "INTERSECT"
                },
                {
                  "id": "opt3",
                  "text": "EXCEPT"
                },
                {
                  "id": "opt4",
                  "text": "JOIN"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "The EXCEPT operator (called MINUS in some DBs like Oracle) returns rows from the first result set that are not in the second.",
              "explanation_ko": "EXCEPT 연산자(Oracle의 MINUS)는 첫 번째 결과 집합에는 존재하지만 두 번째에는 없는 행(차집합)을 반환합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-union.html"
            },
            {
              "id": "q-sql-natural-join",
              "type": "multiple-choice",
              "question": "What is a risk of using NATURAL JOIN?",
              "question_ko": "NATURAL JOIN을 사용할 때의 위험 요소는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It is too slow",
                  "text_ko": "속도가 너무 느림"
                },
                {
                  "id": "opt2",
                  "text": "It might join on unintended columns with the same name",
                  "text_ko": "이름이 같은 의도치 않은 컬럼들이 조인될 수 있음"
                },
                {
                  "id": "opt3",
                  "text": "It only works with primary keys",
                  "text_ko": "기본 키에서만 작동함"
                },
                {
                  "id": "opt4",
                  "text": "It is not supported by any DB",
                  "text_ko": "어떤 DB에서도 지원되지 않음"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "NATURAL JOIN automatically joins tables based on columns with the same name. This can lead to bugs if columns are added later with conflicting names.",
              "explanation_ko": "NATURAL JOIN은 이름이 같은 모든 컬럼을 기준으로 자동 조인하므로, 의도치 않은 컬럼까지 조인 조건에 포함될 위험이 있어 실무에서는 권장되지 않습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Join_(SQL)#Natural_join"
            },
            {
              "id": "q-sql-join-on-vs-using",
              "type": "multiple-choice",
              "question": "Which clause is more flexible for specifying join conditions, allowing different column names?",
              "question_ko": "서로 다른 컬럼 이름을 가진 테이블들을 조인할 때 더 유연하게 조건을 지정할 수 있는 절은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "USING"
                },
                {
                  "id": "opt2",
                  "text": "ON"
                },
                {
                  "id": "opt3",
                  "text": "WHERE"
                },
                {
                  "id": "opt4",
                  "text": "MATCH"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The ON clause allows for any predicate to be used for joining, including different column names or non-equality conditions. USING requires the columns to have the same name.",
              "explanation_ko": "ON 절은 컬럼 이름이 다르더라도 자유롭게 조건을 지정할 수 있어 가장 유연합니다. USING은 조인 대상 컬럼의 이름이 같아야만 사용할 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
            },
            {
              "id": "q-sql-anti-join",
              "type": "multiple-choice",
              "question": "How can you perform an anti-join (selecting rows from table A that have NO match in table B)?",
              "question_ko": "안티 조인(A 테이블에는 있지만 B 테이블에는 일치하는 데이터가 없는 행 선택)을 수행하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "LEFT JOIN with WHERE B.id IS NULL",
                  "text_ko": "WHERE B.id IS NULL을 사용한 LEFT JOIN"
                },
                {
                  "id": "opt2",
                  "text": "INNER JOIN with WHERE B.id IS NULL",
                  "text_ko": "WHERE B.id IS NULL을 사용한 INNER JOIN"
                },
                {
                  "id": "opt3",
                  "text": "FULL OUTER JOIN"
                },
                {
                  "id": "opt4",
                  "text": "CROSS JOIN"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "An anti-join can be achieved by using a LEFT JOIN and filtering for rows where the right side table's join key is NULL.",
              "explanation_ko": "LEFT JOIN을 수행한 후, WHERE 절에서 오른쪽 테이블의 조인 키가 NULL인 것만 필터링하면 안티 조인 효과를 얻을 수 있습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Join_(SQL)#Left_anti-join"
            },
            {
              "id": "q-sql-semi-join",
              "type": "multiple-choice",
              "question": "What is a semi-join concept?",
              "question_ko": "세미 조인(Semi-Join) 개념은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Returning rows from table A that have at least one match in table B",
                  "text_ko": "B 테이블에 일치하는 항목이 하나 이상 있는 A 테이블의 행 반환"
                },
                {
                  "id": "opt2",
                  "text": "Returning half of the records from a join",
                  "text_ko": "조인 결과의 절반만 반환"
                },
                {
                  "id": "opt3",
                  "text": "Joining only non-null values",
                  "text_ko": "NULL이 아닌 값만 조인"
                },
                {
                  "id": "opt4",
                  "text": "A join that only returns primary keys",
                  "text_ko": "기본 키만 반환하는 조인"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A semi-join returns rows from the first table that have one or more matches in the second table, but without duplicating the first table's rows when multiple matches exist (often implemented via EXISTS).",
              "explanation_ko": "세미 조인은 B 테이블에 최소 하나 이상의 일치하는 행이 있는 A 테이블의 행들을 반환합니다. 결과에서 A 테이블의 행이 중복되지 않는다는 점이 INNER JOIN과 다를 수 있습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Join_(SQL)#Semi-join"
            },
            {
              "id": "q-sql-equi-join",
              "type": "multiple-choice",
              "question": "What is an equi-join?",
              "question_ko": "동등 조인(Equi-Join)이란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A join that uses the equality operator (=)",
                  "text_ko": "등호(=) 연산자를 사용하는 조인"
                },
                {
                  "id": "opt2",
                  "text": "A join between tables with the same number of rows",
                  "text_ko": "행의 수가 같은 테이블 간의 조인"
                },
                {
                  "id": "opt3",
                  "text": "A join that returns an equal number of columns",
                  "text_ko": "동일한 수의 컬럼을 반환하는 조인"
                },
                {
                  "id": "opt4",
                  "text": "A join where all values are equivalent",
                  "text_ko": "모든 값이 동등한 조인"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "An equi-join is a type of join that uses only equality comparisons in the join-predicate.",
              "explanation_ko": "동등 조인은 조인 조건에서 등호(=) 연산자만을 사용하는 가장 일반적인 형태의 조인입니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Join_(SQL)#Equi-join"
            },
            {
              "id": "q-sql-non-equi-join",
              "type": "multiple-choice",
              "question": "What is a non-equi join?",
              "question_ko": "비동등 조인(Non-Equi Join)이란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A join using operators other than \"=\" (e.g., <, >, BETWEEN)",
                  "text_ko": "등호(=) 이외의 연산자를 사용하는 조인 (예: <, >, BETWEEN)"
                },
                {
                  "id": "opt2",
                  "text": "A join that fails to return any results",
                  "text_ko": "결과를 반환하지 못하는 조인"
                },
                {
                  "id": "opt3",
                  "text": "A join between tables of different types",
                  "text_ko": "서로 다른 타입의 테이블 간의 조인"
                },
                {
                  "id": "opt4",
                  "text": "A join that doesn't use indexes",
                  "text_ko": "인덱스를 사용하지 않는 조인"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A non-equi join uses comparison operators other than equals, such as <, >, or BETWEEN to join tables.",
              "explanation_ko": "비동등 조인은 등호(=) 대신 <, >, BETWEEN 등 다른 비교 연산자를 조인 조건으로 사용하는 방식입니다.",
              "mdnUrl": "https://www.w3resource.com/sql/joins/perform-a-non-equi-join.php"
            },
            {
              "id": "q-sql-multiple-joins",
              "type": "multiple-choice",
              "question": "How are multiple joins processed in a single query?",
              "question_ko": "하나의 쿼리에서 여러 개의 조인이 어떻게 처리되는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Sequentially, but the optimizer may reorder them for performance",
                  "text_ko": "순차적으로 처리되지만, 최적화 도구가 성능을 위해 순서를 변경할 수 있음"
                },
                {
                  "id": "opt2",
                  "text": "All at the same time in parallel",
                  "text_ko": "모두 동시에 병렬로 처리"
                },
                {
                  "id": "opt3",
                  "text": "Only two tables can be joined in one query",
                  "text_ko": "하나의 쿼리에서는 두 개의 테이블만 조인 가능"
                },
                {
                  "id": "opt4",
                  "text": "Alphabetically by table name",
                  "text_ko": "테이블 이름의 알파벳 순서대로"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "SQL joins are conceptually processed one after another, but the query optimizer determines the most efficient execution order.",
              "explanation_ko": "여러 조인은 개념적으로 순차적으로 수행되지만, 데이터베이스 최적화 도구(Optimizer)가 성능을 위해 실제 실행 순서를 재구성합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/planner-optimizer.html"
            },
            {
              "id": "q-sql-join-performance",
              "type": "multiple-choice",
              "question": "What significantly improves JOIN performance on large tables?",
              "question_ko": "대용량 테이블 간의 조인 성능을 대폭 향상시키는 것은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Indexes on the join columns",
                  "text_ko": "조인 컬럼에 인덱스 생성"
                },
                {
                  "id": "opt2",
                  "text": "Adding more columns to the SELECT",
                  "text_ko": "SELECT 절에 더 많은 컬럼 추가"
                },
                {
                  "id": "opt3",
                  "text": "Removing WHERE clauses",
                  "text_ko": "WHERE 절 제거"
                },
                {
                  "id": "opt4",
                  "text": "Using more FULL OUTER JOINs",
                  "text_ko": "더 많은 FULL OUTER JOIN 사용"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Indexes on the columns used for joining (usually foreign keys and primary keys) are crucial for performance.",
              "explanation_ko": "조인 조건으로 사용되는 컬럼(주로 외래키와 기본키)에 인덱스가 있으면 조인 성능이 크게 향상됩니다.",
              "mdnUrl": "https://use-the-index-luke.com/sql/join"
            }
          ]
        },
        {
          "id": "sql-aggregation",
          "title": "Aggregation",
          "title_ko": "집계와 그룹화",
          "description": "Aggregate functions and GROUP BY.",
          "description_ko": "집계 함수와 GROUP BY 절",
          "questions": [
            {
              "id": "q-sql-count",
              "type": "multiple-choice",
              "question": "What is the difference between COUNT(*) and COUNT(column_name)?",
              "question_ko": "COUNT(*)와 COUNT(컬럼명)의 차이는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "COUNT(column_name) ignores NULLs, COUNT(*) counts all rows",
                  "text_ko": "COUNT(컬럼명)은 NULL을 무시하고, COUNT(*)은 모든 행을 셈"
                },
                {
                  "id": "opt2",
                  "text": "COUNT(*) ignores NULLs, COUNT(column_name) counts all rows",
                  "text_ko": "COUNT(*)은 NULL을 무시하고, COUNT(컬럼명)은 모든 행을 셈"
                },
                {
                  "id": "opt3",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                },
                {
                  "id": "opt4",
                  "text": "COUNT(*) is only for primary keys",
                  "text_ko": "COUNT(*)은 기본 키에만 사용됨"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "COUNT(*) counts every row in the table, while COUNT(column_name) counts only rows where the specified column is not NULL.",
              "explanation_ko": "COUNT(*)은 모든 행의 수를 세지만, COUNT(컬럼명)은 해당 컬럼의 값이 NULL이 아닌 행의 수만 셉니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_count.asp"
            },
            {
              "id": "q-sql-sum-avg",
              "type": "multiple-choice",
              "question": "Which function calculates the average value of a numeric column?",
              "question_ko": "숫자 컬럼의 평균값을 계산하는 함수는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "MEAN()"
                },
                {
                  "id": "opt2",
                  "text": "AVERAGE()"
                },
                {
                  "id": "opt3",
                  "text": "AVG()"
                },
                {
                  "id": "opt4",
                  "text": "SUM()/COUNT()"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "The AVG() function returns the average value of a numeric column.",
              "explanation_ko": "AVG() 함수는 숫자 컬럼의 평균을 계산하여 반환합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_avg.asp"
            },
            {
              "id": "q-sql-group-by",
              "type": "multiple-choice",
              "question": "Which clause is used with aggregate functions to group the result-set by one or more columns?",
              "question_ko": "집계 함수와 함께 사용하여 결과 집합을 하나 이상의 컬럼으로 그룹화하는 절은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "GROUP"
                },
                {
                  "id": "opt2",
                  "text": "SORT BY"
                },
                {
                  "id": "opt3",
                  "text": "GROUP BY"
                },
                {
                  "id": "opt4",
                  "text": "BY"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "The GROUP BY statement groups rows that have the same values into summary rows.",
              "explanation_ko": "GROUP BY 절은 동일한 값을 가진 행들을 요약 행으로 그룹화할 때 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_groupby.asp"
            },
            {
              "id": "q-sql-having",
              "type": "multiple-choice",
              "question": "Why was the HAVING clause added to SQL?",
              "question_ko": "SQL에 HAVING 절이 추가된 이유는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Because WHERE cannot be used with aggregate functions",
                  "text_ko": "WHERE 절에서 집계 함수를 사용할 수 없기 때문"
                },
                {
                  "id": "opt2",
                  "text": "To filter rows before grouping",
                  "text_ko": "그룹화 전에 행을 필터링하기 위해"
                },
                {
                  "id": "opt3",
                  "text": "To sort grouped data",
                  "text_ko": "그룹화된 데이터를 정렬하기 위해"
                },
                {
                  "id": "opt4",
                  "text": "To join grouped tables",
                  "text_ko": "그룹화된 테이블을 조인하기 위해"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The HAVING clause was added because the WHERE keyword could not be used with aggregate functions.",
              "explanation_ko": "WHERE 절에서는 집계 함수를 사용할 수 없기 때문에, 그룹화된 결과에 대한 필터링을 위해 HAVING 절이 추가되었습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_having.asp"
            },
            {
              "id": "q-sql-min-max",
              "type": "multiple-choice",
              "question": "Can MIN() and MAX() be used on string columns?",
              "question_ko": "MIN()과 MAX() 함수를 문자열 컬럼에 사용할 수 있는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Yes, they return values based on alphabetical order",
                  "text_ko": "네, 알파벳 순서에 따라 값을 반환함"
                },
                {
                  "id": "opt2",
                  "text": "No, only on numeric columns",
                  "text_ko": "아니요, 숫자 컬럼에서만 사용 가능함"
                },
                {
                  "id": "opt3",
                  "text": "Only if the strings contain numbers",
                  "text_ko": "문자열에 숫자가 포함된 경우에만"
                },
                {
                  "id": "opt4",
                  "text": "Yes, but they return the length of the strings",
                  "text_ko": "네, 하지만 문자열의 길이를 반환함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "MIN() and MAX() can be used on strings, where they return the lowest and highest values based on the sort order of the collation.",
              "explanation_ko": "네, 문자열 컬럼에 사용하면 알파벳/사전 순서에 따라 가장 낮은 값과 가장 높은 값을 반환합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_min_max.asp"
            },
            {
              "id": "q-sql-group-concat",
              "type": "multiple-choice",
              "question": "Which function is commonly used to concatenate strings from multiple rows into a single string per group?",
              "question_ko": "여러 행의 문자열을 그룹당 하나의 문자열로 결합하는 데 주로 사용되는 함수는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "CONCAT()"
                },
                {
                  "id": "opt2",
                  "text": "GROUP_CONCAT() (MySQL) / STRING_AGG() (PostgreSQL)"
                },
                {
                  "id": "opt3",
                  "text": "SUM()"
                },
                {
                  "id": "opt4",
                  "text": "JOIN_STR()"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "MySQL uses GROUP_CONCAT() and PostgreSQL uses STRING_AGG() to aggregate strings into a single value.",
              "explanation_ko": "여러 행의 문자열 데이터를 하나로 합치기 위해 MySQL은 GROUP_CONCAT, PostgreSQL은 STRING_AGG 함수를 제공합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/functions-aggregate.html"
            },
            {
              "id": "q-sql-aggregate-nulls",
              "type": "multiple-choice",
              "question": "How do aggregate functions like SUM() and AVG() handle NULL values?",
              "question_ko": "SUM(), AVG()와 같은 집계 함수가 NULL 값을 처리하는 방식은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "They ignore NULL values",
                  "text_ko": "NULL 값을 무시함"
                },
                {
                  "id": "opt2",
                  "text": "They treat NULL as zero",
                  "text_ko": "NULL을 0으로 처리함"
                },
                {
                  "id": "opt3",
                  "text": "They return NULL if any value is NULL",
                  "text_ko": "값 중 하나라도 NULL이면 NULL을 반환함"
                },
                {
                  "id": "opt4",
                  "text": "They throw an error",
                  "text_ko": "에러를 발생시킴"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Most aggregate functions ignore NULL values except for COUNT(*).",
              "explanation_ko": "COUNT(*)을 제외한 대부분의 집계 함수는 계산 시 NULL 값을 무시합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_null_values.asp"
            },
            {
              "id": "q-sql-group-by-multiple",
              "type": "multiple-choice",
              "question": "If you have \"SELECT department, job_title, AVG(salary) FROM employees GROUP BY department\", what will happen?",
              "question_ko": "\"SELECT department, job_title, AVG(salary) FROM employees GROUP BY department\" 쿼리를 실행하면 어떻게 되는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It will fail because job_title is not in the GROUP BY clause",
                  "text_ko": "job_title이 GROUP BY 절에 없기 때문에 실패함"
                },
                {
                  "id": "opt2",
                  "text": "It will group by both automatically",
                  "text_ko": "둘 다 자동으로 그룹화함"
                },
                {
                  "id": "opt3",
                  "text": "It will show the first job_title found",
                  "text_ko": "발견된 첫 번째 job_title을 표시함"
                },
                {
                  "id": "opt4",
                  "text": "It will work only in MySQL",
                  "text_ko": "MySQL에서만 작동함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "In standard SQL, every non-aggregated column in the SELECT list must be included in the GROUP BY clause.",
              "explanation_ko": "표준 SQL에서는 집계 함수를 사용하지 않은 모든 SELECT 컬럼은 반드시 GROUP BY 절에 포함되어야 합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP"
            },
            {
              "id": "q-sql-distinct-aggregate",
              "type": "multiple-choice",
              "question": "How do you count the number of unique departments in an employees table?",
              "question_ko": "employees 테이블에서 고유한 부서의 수를 세는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "COUNT(DISTINCT department)"
                },
                {
                  "id": "opt2",
                  "text": "DISTINCT COUNT(department)"
                },
                {
                  "id": "opt3",
                  "text": "COUNT(department).DISTINCT"
                },
                {
                  "id": "opt4",
                  "text": "SUM(DISTINCT 1)"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "COUNT(DISTINCT column_name) returns the number of unique values in that column.",
              "explanation_ko": "COUNT(DISTINCT 컬럼명)을 사용하면 해당 컬럼의 중복되지 않은 고유 값의 개수를 셀 수 있습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_count.asp"
            },
            {
              "id": "q-sql-aggregate-filter",
              "type": "multiple-choice",
              "question": "In modern PostgreSQL, what is the FILTER clause used for in aggregates?",
              "question_ko": "최신 PostgreSQL에서 집계 함수와 함께 사용하는 FILTER 절의 용도는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To perform conditional aggregation (e.g., COUNT(*) FILTER (WHERE age > 20))",
                  "text_ko": "조건부 집계 수행 (예: COUNT(*) FILTER (WHERE age > 20))"
                },
                {
                  "id": "opt2",
                  "text": "To filter the final result set",
                  "text_ko": "최종 결과 집합 필터링"
                },
                {
                  "id": "opt3",
                  "text": "To speed up the query",
                  "text_ko": "쿼리 속도 향상"
                },
                {
                  "id": "opt4",
                  "text": "To replace the HAVING clause",
                  "text_ko": "HAVING 절 대체"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The FILTER clause allows you to specify which rows go into the aggregate function, which is cleaner than using CASE WHEN inside the aggregate.",
              "explanation_ko": "FILTER 절을 사용하면 특정 조건을 만족하는 행들만 집계 함수에 포함시킬 수 있어, CASE WHEN을 사용하는 것보다 직관적입니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-AGGREGATES"
            }
          ]
        }
      ]
    },
    {
      "id": "sql-intermediate",
      "title": "Intermediate SQL",
      "title_ko": "중급 SQL",
      "units": [
        {
          "id": "sql-subqueries",
          "title": "Subqueries & CTEs",
          "title_ko": "서브쿼리와 CTE",
          "description": "Nested queries and Common Table Expressions.",
          "description_ko": "중첩 쿼리와 공통 테이블 식",
          "questions": [
            {
              "id": "q-sql-subquery-where",
              "type": "multiple-choice",
              "question": "What is a subquery?",
              "question_ko": "서브쿼리(Subquery)란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A query nested inside another query",
                  "text_ko": "다른 쿼리 내부에 중첩된 쿼리"
                },
                {
                  "id": "opt2",
                  "text": "A query that runs after the main query",
                  "text_ko": "메인 쿼리 이후에 실행되는 쿼리"
                },
                {
                  "id": "opt3",
                  "text": "A backup query",
                  "text_ko": "백업용 쿼리"
                },
                {
                  "id": "opt4",
                  "text": "A query with only one column",
                  "text_ko": "컬럼이 하나뿐인 쿼리"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A subquery is a query nested inside another SQL query, such as within a SELECT, INSERT, UPDATE, or DELETE statement.",
              "explanation_ko": "서브쿼리는 다른 SQL 쿼리 내부에 중첩된 쿼리를 의미하며, SELECT, INSERT, UPDATE, DELETE 문 어디에서나 사용할 수 있습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_any_all.asp"
            },
            {
              "id": "q-sql-correlated-subquery",
              "type": "multiple-choice",
              "question": "What is a correlated subquery?",
              "question_ko": "상관 서브쿼리(Correlated Subquery)란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A subquery that refers to a column in the outer query",
                  "text_ko": "외부 쿼리의 컬럼을 참조하는 서브쿼리"
                },
                {
                  "id": "opt2",
                  "text": "A subquery that runs once for the whole outer query",
                  "text_ko": "전체 외부 쿼리에 대해 한 번만 실행되는 서브쿼리"
                },
                {
                  "id": "opt3",
                  "text": "A subquery that returns multiple rows",
                  "text_ko": "여러 행을 반환하는 서브쿼리"
                },
                {
                  "id": "opt4",
                  "text": "A subquery used in a JOIN",
                  "text_ko": "조인에서 사용되는 서브쿼리"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A correlated subquery is a subquery that depends on the outer query for its values. It is executed once for each row processed by the outer query.",
              "explanation_ko": "상관 서브쿼리는 외부 쿼리의 값을 참조하는 서브쿼리입니다. 외부 쿼리의 각 행마다 한 번씩 실행되므로 성능에 주의해야 합니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Correlated_subquery"
            },
            {
              "id": "q-sql-exists",
              "type": "multiple-choice",
              "question": "What does the EXISTS operator do?",
              "question_ko": "EXISTS 연산자의 역할은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It checks for the existence of any record in a subquery",
                  "text_ko": "서브쿼리에 레코드가 존재하는지 확인"
                },
                {
                  "id": "opt2",
                  "text": "It checks if a value is in a list",
                  "text_ko": "값이 목록에 있는지 확인"
                },
                {
                  "id": "opt3",
                  "text": "It joins two tables",
                  "text_ko": "두 테이블을 조인함"
                },
                {
                  "id": "opt4",
                  "text": "It deletes existing records",
                  "text_ko": "기존 레코드를 삭제함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The EXISTS operator is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records.",
              "explanation_ko": "EXISTS 연산자는 서브쿼리가 하나 이상의 행을 반환하는지 확인합니다. 조건을 만족하는 행이 존재하면 바로 TRUE를 반환하고 검색을 멈춥니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_exists.asp"
            },
            {
              "id": "q-sql-cte-basics",
              "type": "multiple-choice",
              "question": "What keyword is used to define a Common Table Expression (CTE)?",
              "question_ko": "공통 테이블 식(CTE)을 정의할 때 사용하는 키워드는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "DEFINE"
                },
                {
                  "id": "opt2",
                  "text": "WITH"
                },
                {
                  "id": "opt3",
                  "text": "AS"
                },
                {
                  "id": "opt4",
                  "text": "TEMP"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "A CTE is defined using the WITH keyword. It provides a way to define temporary result sets that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.",
              "explanation_ko": "CTE는 WITH 키워드를 사용하여 정의하며, 쿼리 내에서 일시적으로 사용할 결과 집합을 정의하는 깔끔한 방법을 제공합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-with.html"
            },
            {
              "id": "q-sql-recursive-cte",
              "type": "multiple-choice",
              "question": "What is a recursive CTE primarily used for?",
              "question_ko": "재귀적 CTE(Recursive CTE)는 주로 언제 사용하는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Handling hierarchical or tree-structured data",
                  "text_ko": "계층형 또는 트리 구조 데이터 처리"
                },
                {
                  "id": "opt2",
                  "text": "Making queries run faster",
                  "text_ko": "쿼리 실행 속도 향상"
                },
                {
                  "id": "opt3",
                  "text": "Deleting all records in a table",
                  "text_ko": "테이블의 모든 레코드 삭제"
                },
                {
                  "id": "opt4",
                  "text": "Joining more than 10 tables",
                  "text_ko": "10개 이상의 테이블 조인"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Recursive CTEs are used to query hierarchical data like organizational charts, file systems, or bill of materials.",
              "explanation_ko": "재귀적 CTE는 조직도, 파일 시스템, 부품 계층 구조 등 트리 형태의 데이터를 조회할 때 유용하게 사용됩니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-with.html#QUERIES-WITH-RECURSIVE"
            },
            {
              "id": "q-sql-scalar-subquery",
              "type": "multiple-choice",
              "question": "What is a scalar subquery?",
              "question_ko": "스칼라 서브쿼리(Scalar Subquery)란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A subquery that returns exactly one value (one row and one column)",
                  "text_ko": "정확히 하나의 값(1행 1열)을 반환하는 서브쿼리"
                },
                {
                  "id": "opt2",
                  "text": "A subquery that returns a whole table",
                  "text_ko": "전체 테이블을 반환하는 서브쿼리"
                },
                {
                  "id": "opt3",
                  "text": "A subquery used in a JOIN",
                  "text_ko": "조인에서 사용되는 서브쿼리"
                },
                {
                  "id": "opt4",
                  "text": "A subquery with aggregate functions",
                  "text_ko": "집계 함수가 포함된 서브쿼리"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A scalar subquery is a subquery that returns only one value. It can be used anywhere a single value is expected.",
              "explanation_ko": "스칼라 서브쿼리는 정확히 하나의 값(1행 1열)만 반환하는 서브쿼리입니다. 단일 값이 필요한 곳이라면 어디든 사용할 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-expressions.html#SQL-EXPRESSIONS-SCALAR-SUBQUERIES"
            },
            {
              "id": "q-sql-in-vs-exists",
              "type": "multiple-choice",
              "question": "When comparing IN and EXISTS with a large subquery, which is often more efficient if the subquery returns many rows?",
              "question_ko": "대량의 데이터를 반환하는 서브쿼리를 다룰 때, IN과 EXISTS 중 보통 어느 것이 더 효율적인가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "EXISTS, because it stops at the first match",
                  "text_ko": "첫 번째 일치 항목에서 멈추는 EXISTS"
                },
                {
                  "id": "opt2",
                  "text": "IN, because it uses a hash table",
                  "text_ko": "해시 테이블을 사용하는 IN"
                },
                {
                  "id": "opt3",
                  "text": "They are always identical in performance",
                  "text_ko": "항상 동일한 성능을 보임"
                },
                {
                  "id": "opt4",
                  "text": "Neither, JOIN is always faster",
                  "text_ko": "둘 다 아님, 조인이 항상 더 빠름"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "EXISTS can be more efficient because the database stops processing the subquery as soon as it finds a single matching row.",
              "explanation_ko": "EXISTS는 일치하는 행을 하나라도 찾으면 즉시 검색을 중단하므로, 조건에 맞는 데이터가 존재할 확률이 높을수록 IN보다 효율적일 수 있습니다.",
              "mdnUrl": "https://stackoverflow.com/questions/245293/select-check-if-exists-vs-select-count"
            },
            {
              "id": "q-sql-any-all",
              "type": "multiple-choice",
              "question": "What does the ALL operator do when used with a subquery?",
              "question_ko": "서브쿼리와 함께 사용하는 ALL 연산자의 역할은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "The condition is true only if it matches all values in the subquery",
                  "text_ko": "서브쿼리의 모든 값과 일치해야 참인 조건"
                },
                {
                  "id": "opt2",
                  "text": "The condition is true if it matches any value",
                  "text_ko": "어느 하나라도 일치하면 참인 조건"
                },
                {
                  "id": "opt3",
                  "text": "It returns all columns from the subquery",
                  "text_ko": "서브쿼리의 모든 컬럼 반환"
                },
                {
                  "id": "opt4",
                  "text": "It ignores the WHERE clause",
                  "text_ko": "WHERE 절을 무시함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The ALL operator returns true if the comparison is true for all values returned by the subquery.",
              "explanation_ko": "ALL 연산자는 서브쿼리에서 반환된 모든 값에 대해 비교 조건이 참이어야 전체가 참이 됩니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_any_all.asp"
            },
            {
              "id": "q-sql-subquery-from",
              "type": "multiple-choice",
              "question": "A subquery used in the FROM clause is often called what?",
              "question_ko": "FROM 절에 사용되는 서브쿼리를 흔히 무엇이라 부르는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Derived Table",
                  "text_ko": "파생 테이블 (Derived Table)"
                },
                {
                  "id": "opt2",
                  "text": "Correlated Table",
                  "text_ko": "상관 테이블 (Correlated Table)"
                },
                {
                  "id": "opt3",
                  "text": "Temporary View",
                  "text_ko": "임시 뷰 (Temporary View)"
                },
                {
                  "id": "opt4",
                  "text": "Main Query",
                  "text_ko": "메인 쿼리"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A subquery in the FROM clause is called a derived table or an inline view.",
              "explanation_ko": "FROM 절에서 사용되는 서브쿼리는 파생 테이블(Derived Table) 또는 인라인 뷰(Inline View)라고 불립니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Derived_table"
            },
            {
              "id": "q-sql-cte-scope",
              "type": "multiple-choice",
              "question": "What is the scope of a CTE?",
              "question_ko": "CTE의 유효 범위(Scope)는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "The single SQL statement in which it is defined",
                  "text_ko": "정의된 단일 SQL 문"
                },
                {
                  "id": "opt2",
                  "text": "The entire database session",
                  "text_ko": "전체 데이터베이스 세션"
                },
                {
                  "id": "opt3",
                  "text": "The current transaction",
                  "text_ko": "현재 트랜잭션"
                },
                {
                  "id": "opt4",
                  "text": "Permanently until dropped",
                  "text_ko": "삭제될 때까지 영구적"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A CTE is only valid within the single execution scope of the SQL statement (SELECT, INSERT, UPDATE, DELETE) that follows its definition.",
              "explanation_ko": "CTE는 정의된 직후의 단 하나의 SQL 문이 실행되는 동안에만 유효합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-with.html"
            },
            {
              "id": "q-sql-subquery-select-list",
              "type": "multiple-choice",
              "question": "Can you use a subquery in the SELECT column list?",
              "question_ko": "SELECT 컬럼 목록에 서브쿼리를 사용할 수 있는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Yes, as long as it returns a scalar value",
                  "text_ko": "네, 스칼라 값을 반환하는 경우 가능함"
                },
                {
                  "id": "opt2",
                  "text": "No, only in WHERE and FROM",
                  "text_ko": "아니요, WHERE와 FROM에서만 가능함"
                },
                {
                  "id": "opt3",
                  "text": "Yes, but it must return at least two columns",
                  "text_ko": "네, 하지만 최소 두 개의 컬럼을 반환해야 함"
                },
                {
                  "id": "opt4",
                  "text": "Only if it is a UNION query",
                  "text_ko": "UNION 쿼리인 경우에만 가능함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Subqueries can be used in the SELECT list, but they must return a single value (scalar).",
              "explanation_ko": "네, SELECT 목록에서 서브쿼리를 사용할 수 있지만, 반드시 단일 값(스칼라)을 반환해야 합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-expressions.html#SQL-EXPRESSIONS-SCALAR-SUBQUERIES"
            },
            {
              "id": "q-sql-lateral-join",
              "type": "multiple-choice",
              "question": "What is the benefit of a LATERAL join (PostgreSQL)?",
              "question_ko": "PostgreSQL에서 LATERAL 조인의 장점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It allows a subquery to refer to columns from previous tables in the FROM clause",
                  "text_ko": "서브쿼리가 FROM 절의 이전 테이블 컬럼을 참조할 수 있게 함"
                },
                {
                  "id": "opt2",
                  "text": "It automatically indexes the result",
                  "text_ko": "결과에 자동으로 인덱스를 생성함"
                },
                {
                  "id": "opt3",
                  "text": "It joins tables faster than INNER JOIN",
                  "text_ko": "INNER JOIN보다 빠르게 테이블을 조인함"
                },
                {
                  "id": "opt4",
                  "text": "It creates a physical table",
                  "text_ko": "물리적 테이블을 생성함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A LATERAL join allows a subquery to reference columns from other items in the FROM list that appear before it.",
              "explanation_ko": "LATERAL 조인을 사용하면 서브쿼리가 FROM 절 내의 이전에 선언된 다른 테이블의 컬럼을 참조할 수 있게 됩니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL"
            },
            {
              "id": "q-sql-not-exists-null",
              "type": "multiple-choice",
              "question": "Why is NOT EXISTS often preferred over NOT IN for subqueries that might contain NULLs?",
              "question_ko": "NULL을 포함할 수 있는 서브쿼리에서 NOT IN보다 NOT EXISTS가 선호되는 이유는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "NOT IN returns no results if the subquery contains a NULL",
                  "text_ko": "서브쿼리에 NULL이 포함된 경우 NOT IN은 결과를 반환하지 않음"
                },
                {
                  "id": "opt2",
                  "text": "NOT EXISTS is always slower",
                  "text_ko": "NOT EXISTS는 항상 더 느림"
                },
                {
                  "id": "opt3",
                  "text": "NOT IN only works for numbers",
                  "text_ko": "NOT IN은 숫자에서만 작동함"
                },
                {
                  "id": "opt4",
                  "text": "There is no functional difference",
                  "text_ko": "기능적 차이가 없음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "In SQL, if a subquery returns a NULL, a NOT IN condition will return no results for the entire query due to three-valued logic. NOT EXISTS handles this more predictably.",
              "explanation_ko": "SQL의 3값 논리(True, False, Unknown) 때문에, 서브쿼리 결과에 NULL이 하나라도 포함되면 NOT IN 조건은 아무런 결과도 반환하지 않습니다. NOT EXISTS는 이를 안전하게 처리합니다.",
              "mdnUrl": "https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-postgresql/"
            },
            {
              "id": "q-sql-cte-readability",
              "type": "multiple-choice",
              "question": "What is a major advantage of using CTEs over nested subqueries?",
              "question_ko": "중첩 서브쿼리에 비해 CTE를 사용할 때의 주요 장점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Better readability and modularity",
                  "text_ko": "더 나은 가독성과 모듈성"
                },
                {
                  "id": "opt2",
                  "text": "Guaranteed performance boost in all databases",
                  "text_ko": "모든 데이터베이스에서 성능 향상 보장"
                },
                {
                  "id": "opt3",
                  "text": "CTEs can be indexed",
                  "text_ko": "CTE에 인덱스 생성 가능"
                },
                {
                  "id": "opt4",
                  "text": "CTEs can bypass security permissions",
                  "text_ko": "CTE는 보안 권한을 우회할 수 있음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "CTEs make complex queries much easier to read and maintain by breaking them down into logical blocks.",
              "explanation_ko": "CTE는 복잡한 쿼리를 논리적인 블록으로 쪼개어 가독성을 높여주고 유지보수를 쉽게 만들어줍니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-with.html"
            },
            {
              "id": "q-sql-materialized-cte",
              "type": "multiple-choice",
              "question": "In PostgreSQL 12+, what does the MATERIALIZED hint do to a CTE?",
              "question_ko": "PostgreSQL 12 버전 이상에서 CTE에 MATERIALIZED 힌트를 주면 어떻게 되는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It forces the database to execute the CTE and store the result temporarily",
                  "text_ko": "데이터베이스가 CTE를 실행하고 결과를 임시 저장하도록 강제함"
                },
                {
                  "id": "opt2",
                  "text": "It saves the result permanently to disk",
                  "text_ko": "결과를 디스크에 영구적으로 저장함"
                },
                {
                  "id": "opt3",
                  "text": "It creates an index on the CTE",
                  "text_ko": "CTE에 인덱스를 생성함"
                },
                {
                  "id": "opt4",
                  "text": "It prevents the CTE from being executed",
                  "text_ko": "CTE가 실행되지 않도록 함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The MATERIALIZED keyword tells the database to execute the CTE separately and store the result, preventing the optimizer from \"folding\" it into the main query.",
              "explanation_ko": "MATERIALIZED 키워드는 데이터베이스가 CTE를 별도로 실행하여 결과를 임시 저장하도록 강제합니다. 옵티마이저가 쿼리를 재구성하는 것을 막고 싶을 때 사용합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/queries-with.html"
            }
          ]
        },
        {
          "id": "sql-window-functions",
          "title": "Window Functions",
          "title_ko": "윈도우 함수",
          "description": "Analytic functions and OVER clause.",
          "description_ko": "분석 함수와 OVER 절",
          "questions": [
            {
              "id": "q-sql-window-intro",
              "type": "multiple-choice",
              "question": "What is a window function?",
              "question_ko": "윈도우 함수(Window Function)란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A function that performs calculations across a set of rows related to the current row",
                  "text_ko": "현재 행과 관련된 행들의 집합에 대해 계산을 수행하는 함수"
                },
                {
                  "id": "opt2",
                  "text": "A function that only works on graphical interfaces",
                  "text_ko": "그래픽 인터페이스에서만 작동하는 함수"
                },
                {
                  "id": "opt3",
                  "text": "A function that creates temporary tables",
                  "text_ko": "임시 테이블을 생성하는 함수"
                },
                {
                  "id": "opt4",
                  "text": "A function that filters rows",
                  "text_ko": "행을 필터링하는 함수"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Window functions perform calculations across a set of table rows that are somehow related to the current row, without collapsing them into a single grouping.",
              "explanation_ko": "윈도우 함수는 현재 행과 관련된 행들의 집합을 대상으로 계산을 수행합니다. GROUP BY와 달리 행들을 하나로 합치지 않고 각 행의 세부 사항을 유지합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/tutorial-window.html"
            },
            {
              "id": "q-sql-over-clause",
              "type": "multiple-choice",
              "question": "Which clause is mandatory for a window function?",
              "question_ko": "윈도우 함수에서 반드시 사용해야 하는 절은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "OVER"
                },
                {
                  "id": "opt2",
                  "text": "UNDER"
                },
                {
                  "id": "opt3",
                  "text": "GROUP BY"
                },
                {
                  "id": "opt4",
                  "text": "HAVING"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The OVER clause defines the \"window\" or set of rows that the function will operate on.",
              "explanation_ko": "OVER 절은 윈도우 함수가 계산을 수행할 대상 행들의 범위(윈도우)를 정의합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/functions-window.html"
            },
            {
              "id": "q-sql-row-number",
              "type": "multiple-choice",
              "question": "What does ROW_NUMBER() do?",
              "question_ko": "ROW_NUMBER() 함수의 역할은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Assigns a unique sequential integer to each row",
                  "text_ko": "각 행에 고유한 연속 정수를 할당함"
                },
                {
                  "id": "opt2",
                  "text": "Counts the total number of rows",
                  "text_ko": "전체 행의 수를 셈"
                },
                {
                  "id": "opt3",
                  "text": "Returns the primary key of the row",
                  "text_ko": "행의 기본 키를 반환함"
                },
                {
                  "id": "opt4",
                  "text": "Groups rows by number",
                  "text_ko": "번호별로 행을 그룹화함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "ROW_NUMBER() assigns a unique integer to each row within the partition, starting from 1.",
              "explanation_ko": "ROW_NUMBER()는 파티션 내의 각 행에 대해 1부터 시작하는 고유한 순번을 부여합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/functions-window.html"
            },
            {
              "id": "q-sql-rank-vs-dense-rank",
              "type": "multiple-choice",
              "question": "What is the difference between RANK() and DENSE_RANK()?",
              "question_ko": "RANK()와 DENSE_RANK()의 차이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "RANK() leaves gaps after ties, DENSE_RANK() does not",
                  "text_ko": "RANK()는 동일 순위 뒤에 공백을 남기지만, DENSE_RANK()는 남기지 않음"
                },
                {
                  "id": "opt2",
                  "text": "DENSE_RANK() leaves gaps, RANK() does not",
                  "text_ko": "DENSE_RANK()는 공백을 남기지만, RANK()는 남기지 않음"
                },
                {
                  "id": "opt3",
                  "text": "RANK() only works on numbers",
                  "text_ko": "RANK()는 숫자에서만 작동함"
                },
                {
                  "id": "opt4",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "RANK() skips the next rank if there is a tie (e.g., 1, 2, 2, 4). DENSE_RANK() does not skip (e.g., 1, 2, 2, 3).",
              "explanation_ko": "RANK()는 공동 순위가 있을 경우 다음 순위를 건너뛰지만(예: 1, 2, 2, 4), DENSE_RANK()는 순위를 건너뛰지 않고 이어서 부여합니다(예: 1, 2, 2, 3).",
              "mdnUrl": "https://www.postgresql.org/docs/current/functions-window.html"
            },
            {
              "id": "q-sql-partition-by",
              "type": "multiple-choice",
              "question": "What does PARTITION BY do in a window function?",
              "question_ko": "윈도우 함수에서 PARTITION BY의 역할은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It divides the result set into groups for the window function to operate on separately",
                  "text_ko": "윈도우 함수가 별도로 작동하도록 결과 집합을 그룹으로 나눔"
                },
                {
                  "id": "opt2",
                  "text": "It physically partitions the table on disk",
                  "text_ko": "디스크의 테이블을 물리적으로 파티션함"
                },
                {
                  "id": "opt3",
                  "text": "It sorts the final result set",
                  "text_ko": "최종 결과 집합을 정렬함"
                },
                {
                  "id": "opt4",
                  "text": "It deletes data in specific groups",
                  "text_ko": "특정 그룹의 데이터를 삭제함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "PARTITION BY divides the rows into groups (partitions) that share the same values, and the window function is applied to each group independently.",
              "explanation_ko": "PARTITION BY는 결과 집합을 특정 기준에 따라 그룹(파티션)으로 나눕니다. 윈도우 함수는 각 파티션 내에서 독립적으로 계산됩니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS"
            },
            {
              "id": "q-sql-lead-lag",
              "type": "multiple-choice",
              "question": "What are LEAD() and LAG() functions used for?",
              "question_ko": "LEAD()와 LAG() 함수의 용도는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Accessing data from a subsequent or previous row without a self-join",
                  "text_ko": "셀프 조인 없이 다음 또는 이전 행의 데이터에 접근"
                },
                {
                  "id": "opt2",
                  "text": "Measuring network latency",
                  "text_ko": "네트워크 지연 시간 측정"
                },
                {
                  "id": "opt3",
                  "text": "Speeding up query execution",
                  "text_ko": "쿼리 실행 속도 향상"
                },
                {
                  "id": "opt4",
                  "text": "Calculating the sum of the next 10 rows",
                  "text_ko": "다음 10개 행의 합계 계산"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "LAG() accesses data from a previous row, and LEAD() accesses data from a subsequent row in the result set.",
              "explanation_ko": "LAG()는 이전 행의 데이터를, LEAD()는 다음 행의 데이터를 가져올 때 사용합니다. 셀프 조인 없이도 행 간의 비교를 쉽게 할 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/functions-window.html"
            },
            {
              "id": "q-sql-window-frame",
              "type": "multiple-choice",
              "question": "What does \"ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\" specify?",
              "question_ko": "\"ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\"가 의미하는 것은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A frame from the very first row to the current row",
                  "text_ko": "첫 번째 행부터 현재 행까지의 프레임"
                },
                {
                  "id": "opt2",
                  "text": "All rows in the table",
                  "text_ko": "테이블의 모든 행"
                },
                {
                  "id": "opt3",
                  "text": "Only the first and last row",
                  "text_ko": "첫 번째와 마지막 행만"
                },
                {
                  "id": "opt4",
                  "text": "A frame from the current row to the next 10 rows",
                  "text_ko": "현재 행부터 다음 10개 행까지의 프레임"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "This frame specification defines the window as all rows from the start of the partition up to and including the current row, commonly used for running totals.",
              "explanation_ko": "이 설정은 파티션의 시작부터 현재 행까지를 계산 범위로 지정합니다. 주로 누적 합계(Running Total)를 구할 때 사용합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS"
            },
            {
              "id": "q-sql-window-agg",
              "type": "multiple-choice",
              "question": "Can normal aggregate functions like SUM() be used as window functions?",
              "question_ko": "SUM()과 같은 일반 집계 함수를 윈도우 함수로 사용할 수 있는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Yes, by adding an OVER clause"
                },
                {
                  "id": "opt2",
                  "text": "No, only special functions like RANK() can be used"
                },
                {
                  "id": "opt3",
                  "text": "Yes, but they must be renamed"
                },
                {
                  "id": "opt4",
                  "text": "Only in MySQL"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Any built-in aggregate function can be used as a window function by following it with an OVER clause.",
              "explanation_ko": "모든 내장 집계 함수는 OVER 절을 붙여서 윈도우 함수로 사용할 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/tutorial-window.html"
            },
            {
              "id": "q-sql-ntile",
              "type": "multiple-choice",
              "question": "What does NTILE(4) do?",
              "question_ko": "NTILE(4) 함수의 역할은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Divides the rows into 4 equal groups and assigns a bucket number",
                  "text_ko": "행을 4개의 균등한 그룹으로 나누고 버킷 번호를 할당함"
                },
                {
                  "id": "opt2",
                  "text": "Returns the 4th row",
                  "text_ko": "4번째 행을 반환함"
                },
                {
                  "id": "opt3",
                  "text": "Multiplies the values by 4",
                  "text_ko": "값을 4배로 곱함"
                },
                {
                  "id": "opt4",
                  "text": "Groups by every 4th row",
                  "text_ko": "매 4번째 행마다 그룹화함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "NTILE(n) divides ordered rows into n buckets and assigns the appropriate bucket number to each row.",
              "explanation_ko": "NTILE(n)은 정렬된 행들을 n개의 그룹으로 균등하게 나누고, 각 행이 속한 그룹 번호를 반환합니다. (예: 4분위수 계산)",
              "mdnUrl": "https://www.postgresql.org/docs/current/functions-window.html"
            },
            {
              "id": "q-sql-window-vs-groupby",
              "type": "multiple-choice",
              "question": "How does a window function differ from GROUP BY in terms of the output rows?",
              "question_ko": "출력되는 행의 수 관점에서 윈도우 함수와 GROUP BY의 차이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Window functions do not reduce the number of rows, while GROUP BY does",
                  "text_ko": "윈도우 함수는 행의 수를 줄이지 않지만, GROUP BY는 줄임"
                },
                {
                  "id": "opt2",
                  "text": "GROUP BY does not reduce the number of rows, while window functions do",
                  "text_ko": "GROUP BY는 행의 수를 줄이지 않지만, 윈도우 함수는 줄임"
                },
                {
                  "id": "opt3",
                  "text": "They both reduce the number of rows to one per group",
                  "text_ko": "둘 다 그룹당 하나의 행으로 행의 수를 줄임"
                },
                {
                  "id": "opt4",
                  "text": "They both return the same number of rows as the input",
                  "text_ko": "둘 다 입력과 동일한 수의 행을 반환함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "GROUP BY collapses the original rows into a single row per group. Window functions perform the calculation but retain the identity of each individual row.",
              "explanation_ko": "GROUP BY는 여러 행을 하나의 요약된 행으로 합치지만, 윈도우 함수는 각 행의 개별성을 유지하면서 계산 결과만 추가로 보여줍니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/tutorial-window.html"
            }
          ]
        }
      ]
    },
    {
      "id": "sql-advanced",
      "title": "Advanced SQL",
      "title_ko": "고급 SQL",
      "units": [
        {
          "id": "sql-dml",
          "title": "Data Manipulation",
          "title_ko": "데이터 조작 (DML)",
          "description": "INSERT, UPDATE, DELETE and UPSERT.",
          "description_ko": "데이터 삽입, 수정, 삭제 및 업서트",
          "questions": [
            {
              "id": "q-sql-insert-into",
              "type": "multiple-choice",
              "question": "How do you add a new record to a table?",
              "question_ko": "테이블에 새로운 레코드를 추가하는 명령은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "ADD RECORD"
                },
                {
                  "id": "opt2",
                  "text": "INSERT INTO"
                },
                {
                  "id": "opt3",
                  "text": "UPDATE"
                },
                {
                  "id": "opt4",
                  "text": "MAKE"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The INSERT INTO statement is used to insert new records in a table.",
              "explanation_ko": "INSERT INTO 문은 테이블에 새로운 행을 삽입할 때 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_insert.asp"
            },
            {
              "id": "q-sql-update-where",
              "type": "multiple-choice",
              "question": "What happens if you omit the WHERE clause in an UPDATE statement?",
              "question_ko": "UPDATE 문에서 WHERE 절을 생략하면 어떻게 되는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "It will throw an error",
                  "text_ko": "에러를 발생시킴"
                },
                {
                  "id": "opt2",
                  "text": "All records in the table will be updated",
                  "text_ko": "테이블의 모든 레코드가 업데이트됨"
                },
                {
                  "id": "opt3",
                  "text": "No records will be updated",
                  "text_ko": "어떠한 레코드도 업데이트되지 않음"
                },
                {
                  "id": "opt4",
                  "text": "Only the first record will be updated",
                  "text_ko": "첫 번째 레코드만 업데이트됨"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "If you omit the WHERE clause, all records in the table will be updated!",
              "explanation_ko": "WHERE 절을 생략하면 테이블의 모든 행이 업데이트되므로 매우 주의해야 합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_update.asp"
            },
            {
              "id": "q-sql-delete-vs-truncate",
              "type": "multiple-choice",
              "question": "What is a major difference between DELETE and TRUNCATE?",
              "question_ko": "DELETE와 TRUNCATE의 주요 차이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "DELETE is a DML command and can be rolled back; TRUNCATE is a DDL command",
                  "text_ko": "DELETE는 DML 명령이며 롤백이 가능하고, TRUNCATE는 DDL 명령임"
                },
                {
                  "id": "opt2",
                  "text": "TRUNCATE can use a WHERE clause",
                  "text_ko": "TRUNCATE는 WHERE 절을 사용할 수 있음"
                },
                {
                  "id": "opt3",
                  "text": "DELETE is always faster",
                  "text_ko": "DELETE가 항상 더 빠름"
                },
                {
                  "id": "opt4",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "DELETE is DML and removes rows one by one, recording each in the transaction log. TRUNCATE is DDL, removes all rows by deallocating pages, and is generally not filterable with WHERE.",
              "explanation_ko": "DELETE는 DML 명령어로 행을 하나씩 삭제하며 트랜잭션 로그를 남깁니다(롤백 가능). TRUNCATE는 DDL 명령어로 모든 데이터를 빠르게 삭제하며 보통 WHERE 절을 사용할 수 없습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_delete.asp"
            },
            {
              "id": "q-sql-upsert",
              "type": "multiple-choice",
              "question": "What is an \"Upsert\" operation?",
              "question_ko": "\"Upsert\" 연산이란 무엇인가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Inserting a row, or updating it if it already exists",
                  "text_ko": "행을 삽입하거나, 이미 존재하는 경우 업데이트함"
                },
                {
                  "id": "opt2",
                  "text": "Updating a row and then deleting it",
                  "text_ko": "행을 업데이트한 후 삭제함"
                },
                {
                  "id": "opt3",
                  "text": "Sorting data while inserting",
                  "text_ko": "삽입하는 동안 데이터를 정렬함"
                },
                {
                  "id": "opt4",
                  "text": "Uploading data to a server",
                  "text_ko": "서버에 데이터 업로드"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Upsert is a portmanteau of \"update\" and \"insert\". It refers to a database operation that inserts a row if it doesn't exist, or updates it if it does (e.g., INSERT ... ON CONFLICT).",
              "explanation_ko": "Upsert는 Update와 Insert의 합성어입니다. 데이터가 존재하지 않으면 삽입하고, 이미 존재하면 업데이트하는 작업을 의미합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT"
            },
            {
              "id": "q-sql-insert-select",
              "type": "multiple-choice",
              "question": "How do you copy data from one table into another existing table?",
              "question_ko": "한 테이블의 데이터를 다른 기존 테이블로 복사하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "INSERT INTO ... SELECT"
                },
                {
                  "id": "opt2",
                  "text": "COPY TABLE"
                },
                {
                  "id": "opt3",
                  "text": "MOVE DATA"
                },
                {
                  "id": "opt4",
                  "text": "SELECT INTO"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The INSERT INTO SELECT statement copies data from one table and inserts it into another existing table.",
              "explanation_ko": "INSERT INTO ... SELECT 문을 사용하면 쿼리 결과를 다른 테이블에 즉시 삽입할 수 있습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_insert_into_select.asp"
            },
            {
              "id": "q-sql-returning",
              "type": "multiple-choice",
              "question": "What is the purpose of the RETURNING clause in PostgreSQL?",
              "question_ko": "PostgreSQL에서 RETURNING 절의 용도는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To return the values of rows actually inserted or updated",
                  "text_ko": "실제로 삽입되거나 업데이트된 행의 값을 반환"
                },
                {
                  "id": "opt2",
                  "text": "To undo the operation",
                  "text_ko": "작업을 취소"
                },
                {
                  "id": "opt3",
                  "text": "To redirect the output to a file",
                  "text_ko": "출력을 파일로 리다이렉트"
                },
                {
                  "id": "opt4",
                  "text": "To return to the previous transaction state",
                  "text_ko": "이전 트랜잭션 상태로 돌아감"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The RETURNING clause allows you to retrieve values of columns that were modified by an INSERT, UPDATE, or DELETE, such as an auto-incremented ID.",
              "explanation_ko": "RETURNING 절을 사용하면 INSERT, UPDATE, DELETE 작업의 결과(예: 새로 생성된 ID 값)를 별도의 조회 쿼리 없이 즉시 반환받을 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/dml-returning.html"
            },
            {
              "id": "q-sql-update-join",
              "type": "multiple-choice",
              "question": "How can you update rows in Table A based on values from Table B?",
              "question_ko": "Table B의 값을 기준으로 Table A의 행을 업데이트하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Using a subquery or a JOIN in the UPDATE statement",
                  "text_ko": "UPDATE 문에서 서브쿼리 또는 조인을 사용"
                },
                {
                  "id": "opt2",
                  "text": "It is not possible",
                  "text_ko": "불가능함"
                },
                {
                  "id": "opt3",
                  "text": "By deleting and re-inserting",
                  "text_ko": "삭제 후 다시 삽입"
                },
                {
                  "id": "opt4",
                  "text": "Using the GROUP BY clause",
                  "text_ko": "GROUP BY 절을 사용"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "You can update a table by joining it with another table (using UPDATE ... FROM in Postgres or JOIN in MySQL) or by using a correlated subquery in the SET clause.",
              "explanation_ko": "UPDATE 문에 JOIN을 사용하거나(MySQL) FROM 절을 추가하여(PostgreSQL) 다른 테이블의 데이터를 참조해 업데이트할 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-update.html"
            },
            {
              "id": "q-sql-delete-limit",
              "type": "multiple-choice",
              "question": "Can you use LIMIT with a DELETE statement in MySQL?",
              "question_ko": "MySQL에서 DELETE 문에 LIMIT을 사용할 수 있는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Yes, to limit the number of rows deleted",
                  "text_ko": "네, 삭제되는 행의 수를 제한하기 위해"
                },
                {
                  "id": "opt2",
                  "text": "No, LIMIT is only for SELECT",
                  "text_ko": "아니요, LIMIT은 SELECT 전용임"
                },
                {
                  "id": "opt3",
                  "text": "Only if the table has no primary key",
                  "text_ko": "테이블에 기본 키가 없는 경우에만"
                },
                {
                  "id": "opt4",
                  "text": "Only within a transaction",
                  "text_ko": "트랜잭션 내에서만"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "In MySQL, you can use LIMIT with DELETE to restrict the number of rows that are deleted in a single statement, often combined with ORDER BY.",
              "explanation_ko": "네, MySQL에서는 DELETE에 LIMIT을 사용하여 한 번에 삭제할 행의 수를 제한할 수 있습니다. 주로 ORDER BY와 함께 사용합니다.",
              "mdnUrl": "https://dev.mysql.org/doc/refman/8.0/en/delete.html"
            },
            {
              "id": "q-sql-merge",
              "type": "multiple-choice",
              "question": "What is the standard SQL statement for \"Upsert\" functionality?",
              "question_ko": "\"Upsert\" 기능을 수행하는 표준 SQL 구문은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "MERGE"
                },
                {
                  "id": "opt2",
                  "text": "UPSERT"
                },
                {
                  "id": "opt3",
                  "text": "INSERT OR UPDATE"
                },
                {
                  "id": "opt4",
                  "text": "SYNC"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The MERGE statement is part of the SQL standard for performing insert, update, and delete operations in a single statement based on conditions.",
              "explanation_ko": "MERGE 문은 조건에 따라 INSERT, UPDATE, DELETE 작업을 한 번에 처리할 수 있도록 정의된 표준 SQL 구문입니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Merge_(SQL)"
            },
            {
              "id": "q-sql-truncate-identity",
              "type": "multiple-choice",
              "question": "Does TRUNCATE reset auto-increment (identity) values in most databases?",
              "question_ko": "대부분의 DB에서 TRUNCATE를 하면 자동 증가(Identity) 값이 초기화되는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Yes, it usually resets the sequence back to the seed value",
                  "text_ko": "네, 보통 시퀀스를 초기 값으로 재설정함"
                },
                {
                  "id": "opt2",
                  "text": "No, it continues from the last value",
                  "text_ko": "아니요, 마지막 값부터 계속함"
                },
                {
                  "id": "opt3",
                  "text": "Only if the table is empty",
                  "text_ko": "테이블이 비어 있는 경우에만"
                },
                {
                  "id": "opt4",
                  "text": "It depends on the WHERE clause",
                  "text_ko": "WHERE 절에 따라 다름"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Unlike DELETE, TRUNCATE usually resets any auto-incrementing identity column back to its initial seed value.",
              "explanation_ko": "DELETE와 달리 TRUNCATE는 보통 자동 증가 컬럼의 값을 초기값으로 재설정합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-truncate.html"
            }
          ]
        },
        {
          "id": "sql-ddl-design",
          "title": "DDL & Design",
          "title_ko": "데이터 정의 및 설계",
          "description": "CREATE, ALTER, DROP and Normalization.",
          "description_ko": "테이블 생성, 변경, 삭제 및 정규화",
          "questions": [
            {
              "id": "q-sql-create-table",
              "type": "multiple-choice",
              "question": "Which statement is used to create a new table?",
              "question_ko": "새로운 테이블을 생성하는 명령은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "CREATE TABLE"
                },
                {
                  "id": "opt2",
                  "text": "NEW TABLE"
                },
                {
                  "id": "opt3",
                  "text": "MAKE TABLE"
                },
                {
                  "id": "opt4",
                  "text": "BUILD TABLE"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The CREATE TABLE statement is used to create a new table in a database.",
              "explanation_ko": "CREATE TABLE 문은 데이터베이스에 새로운 테이블을 정의할 때 사용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_create_table.asp"
            },
            {
              "id": "q-sql-data-types-char",
              "type": "multiple-choice",
              "question": "What is the difference between CHAR and VARCHAR?",
              "question_ko": "CHAR와 VARCHAR의 차이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "CHAR is fixed-length, VARCHAR is variable-length",
                  "text_ko": "CHAR는 고정 길이, VARCHAR는 가변 길이"
                },
                {
                  "id": "opt2",
                  "text": "VARCHAR is fixed-length, CHAR is variable-length",
                  "text_ko": "VARCHAR는 고정 길이, CHAR는 가변 길이"
                },
                {
                  "id": "opt3",
                  "text": "CHAR is for numbers, VARCHAR is for text",
                  "text_ko": "CHAR는 숫자용, VARCHAR는 텍스트용"
                },
                {
                  "id": "opt4",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "CHAR is a fixed-length string (padded with spaces), while VARCHAR is a variable-length string that only stores the actual characters.",
              "explanation_ko": "CHAR는 고정 길이 문자열로 남은 공간을 공백으로 채우며, VARCHAR는 실제 입력된 문자의 길이만큼만 공간을 사용하는 가변 길이 문자열입니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_datatypes.asp"
            },
            {
              "id": "q-sql-alter-table",
              "type": "multiple-choice",
              "question": "How do you add a new column to an existing table?",
              "question_ko": "기존 테이블에 새로운 컬럼을 추가하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "ALTER TABLE table_name ADD column_name datatype"
                },
                {
                  "id": "opt2",
                  "text": "UPDATE TABLE table_name ADD column_name"
                },
                {
                  "id": "opt3",
                  "text": "MODIFY TABLE table_name ADD column_name"
                },
                {
                  "id": "opt4",
                  "text": "INSERT COLUMN column_name INTO table_name"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.",
              "explanation_ko": "ALTER TABLE 문에 ADD 절을 사용하여 기존 테이블에 새 컬럼을 추가할 수 있습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_alter.asp"
            },
            {
              "id": "q-sql-drop-table",
              "type": "multiple-choice",
              "question": "What is the command to permanently remove a table and all its data?",
              "question_ko": "테이블과 그 안의 모든 데이터를 영구적으로 삭제하는 명령은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "DELETE TABLE"
                },
                {
                  "id": "opt2",
                  "text": "DROP TABLE"
                },
                {
                  "id": "opt3",
                  "text": "REMOVE TABLE"
                },
                {
                  "id": "opt4",
                  "text": "TRUNCATE TABLE"
                }
              ],
              "correctAnswerId": "opt2",
              "explanation": "The DROP TABLE statement is used to drop an existing table in a database.",
              "explanation_ko": "DROP TABLE 문은 테이블 구조와 데이터를 모두 삭제하며 복구할 수 없습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_drop_table.asp"
            },
            {
              "id": "q-sql-normalization-1nf",
              "type": "multiple-choice",
              "question": "What is the main requirement of the First Normal Form (1NF)?",
              "question_ko": "제1정규형(1NF)의 핵심 요구사항은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Each column must contain atomic (indivisible) values",
                  "text_ko": "각 컬럼은 원자적(나눌 수 없는) 값을 포함해야 함"
                },
                {
                  "id": "opt2",
                  "text": "Elimination of partial dependencies",
                  "text_ko": "부분 의존성 제거"
                },
                {
                  "id": "opt3",
                  "text": "Elimination of transitive dependencies",
                  "text_ko": "이행적 의존성 제거"
                },
                {
                  "id": "opt4",
                  "text": "Use of foreign keys",
                  "text_ko": "외래 키 사용"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "1NF requires that each column contains atomic values and that there are no repeating groups of columns.",
              "explanation_ko": "제1정규형은 모든 컬럼의 값이 원자값(더 이상 쪼개질 수 없는 값)이어야 하며, 중복되는 그룹이 없어야 함을 의미합니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/First_normal_form"
            },
            {
              "id": "q-sql-normalization-2nf",
              "type": "multiple-choice",
              "question": "What does Second Normal Form (2NF) focus on removing?",
              "question_ko": "제2정규형(2NF)이 제거하고자 하는 것은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Partial functional dependencies",
                  "text_ko": "부분 함수 종속성"
                },
                {
                  "id": "opt2",
                  "text": "Repeating groups",
                  "text_ko": "중복 그룹"
                },
                {
                  "id": "opt3",
                  "text": "Transitive dependencies",
                  "text_ko": "이행적 의존성"
                },
                {
                  "id": "opt4",
                  "text": "Calculated columns",
                  "text_ko": "계산된 컬럼"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "2NF requires a table to be in 1NF and that all non-key attributes are fully functional dependent on the entire primary key, removing partial dependencies.",
              "explanation_ko": "제2정규형은 제1정규형을 만족하면서, 기본키의 일부분에만 의존하는 부분 함수 종속성을 제거하는 단계입니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Second_normal_form"
            },
            {
              "id": "q-sql-normalization-3nf",
              "type": "multiple-choice",
              "question": "What does Third Normal Form (3NF) eliminate?",
              "question_ko": "제3정규형(3NF)이 제거하는 것은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Transitive functional dependencies",
                  "text_ko": "이행적 함수 종속성"
                },
                {
                  "id": "opt2",
                  "text": "Partial dependencies",
                  "text_ko": "부분 의존성"
                },
                {
                  "id": "opt3",
                  "text": "Multiple primary keys",
                  "text_ko": "다중 기본 키"
                },
                {
                  "id": "opt4",
                  "text": "NULL values",
                  "text_ko": "NULL 값"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "3NF requires that all the fields in a record are dependent only on the primary key, removing transitive dependencies (non-key columns depending on other non-key columns).",
              "explanation_ko": "제3정규형은 기본키가 아닌 컬럼 간의 종속성(이행적 함수 종속성)을 제거하는 단계입니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Third_normal_form"
            },
            {
              "id": "q-sql-denormalization",
              "type": "multiple-choice",
              "question": "Why would someone choose to denormalize a database?",
              "question_ko": "데이터베이스를 비정규화(Denormalization)하는 주된 이유는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To improve read performance by reducing the number of joins",
                  "text_ko": "조인 횟수를 줄여 읽기 성능을 개선하기 위해"
                },
                {
                  "id": "opt2",
                  "text": "To save disk space",
                  "text_ko": "디스크 공간 절약"
                },
                {
                  "id": "opt3",
                  "text": "To ensure data integrity",
                  "text_ko": "데이터 무결성 보장"
                },
                {
                  "id": "opt4",
                  "text": "To make the schema more complex",
                  "text_ko": "스키마를 더 복잡하게 만들기 위해"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Denormalization is used to improve performance by adding redundant data or grouping data, which reduces the need for complex joins during read operations.",
              "explanation_ko": "비정규화는 조인 횟수를 줄여 읽기 성능을 향상시키기 위해 의도적으로 중복 데이터를 허용하거나 테이블을 합치는 기법입니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Denormalization"
            },
            {
              "id": "q-sql-constraints-intro",
              "type": "multiple-choice",
              "question": "What is the purpose of SQL constraints?",
              "question_ko": "SQL 제약 조건(Constraints)의 목적은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To specify rules for data in a table",
                  "text_ko": "테이블의 데이터에 대한 규칙 지정"
                },
                {
                  "id": "opt2",
                  "text": "To sort the data",
                  "text_ko": "데이터 정렬"
                },
                {
                  "id": "opt3",
                  "text": "To encrypt the data",
                  "text_ko": "데이터 암호화"
                },
                {
                  "id": "opt4",
                  "text": "To compress the data",
                  "text_ko": "데이터 압축"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Constraints are used to limit the type of data that can go into a table, ensuring the accuracy and reliability of the data.",
              "explanation_ko": "제약 조건은 테이블에 저장될 데이터의 규칙을 정의하여 데이터의 정확성과 신뢰성(무결성)을 보장합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_constraints.asp"
            },
            {
              "id": "q-sql-create-view",
              "type": "multiple-choice",
              "question": "What is a \"View\" in SQL?",
              "question_ko": "SQL에서 \"뷰(View)\"란 무엇인가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A virtual table based on the result-set of an SQL statement",
                  "text_ko": "SQL 문 결과 집합을 기반으로 하는 가상 테이블"
                },
                {
                  "id": "opt2",
                  "text": "A copy of a table stored on disk",
                  "text_ko": "디스크에 저장된 테이블의 복사본"
                },
                {
                  "id": "opt3",
                  "text": "A tool for database administration",
                  "text_ko": "데이터베이스 관리 도구"
                },
                {
                  "id": "opt4",
                  "text": "A type of index",
                  "text_ko": "인덱스의 한 종류"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A view is a virtual table that consists of rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.",
              "explanation_ko": "뷰는 실제 데이터를 물리적으로 저장하지 않고, 쿼리 결과를 바탕으로 생성되는 가상 테이블입니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_view.asp"
            }
          ]
        }
      ]
    },
    {
      "id": "sql-optimization",
      "title": "Optimization & Integrity",
      "title_ko": "최적화 및 무결성",
      "units": [
        {
          "id": "sql-integrity-trans",
          "title": "Integrity & Transactions",
          "title_ko": "무결성 및 트랜잭션",
          "description": "Constraints, Indexes and ACID.",
          "description_ko": "제약 조건, 인덱스 및 ACID 특성",
          "questions": [
            {
              "id": "q-sql-primary-key",
              "type": "multiple-choice",
              "question": "What is a Primary Key?",
              "question_ko": "기본키(Primary Key)란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A column that uniquely identifies each row in a table",
                  "text_ko": "테이블의 각 행을 고유하게 식별하는 컬럼"
                },
                {
                  "id": "opt2",
                  "text": "A key that encrypts the table",
                  "text_ko": "테이블을 암호화하는 키"
                },
                {
                  "id": "opt3",
                  "text": "The first column of any table",
                  "text_ko": "모든 테이블의 첫 번째 컬럼"
                },
                {
                  "id": "opt4",
                  "text": "A key used for joins",
                  "text_ko": "조인에 사용되는 키"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A primary key must contain unique values and cannot contain NULL values.",
              "explanation_ko": "기본키는 테이블의 각 행을 고유하게 식별하며, 중복된 값이나 NULL 값을 가질 수 없습니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_primarykey.asp"
            },
            {
              "id": "q-sql-foreign-key",
              "type": "multiple-choice",
              "question": "What is a Foreign Key?",
              "question_ko": "외래키(Foreign Key)란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A field that refers to the PRIMARY KEY in another table",
                  "text_ko": "다른 테이블의 PRIMARY KEY를 참조하는 필드"
                },
                {
                  "id": "opt2",
                  "text": "A key that comes from a different database",
                  "text_ko": "다른 데이터베이스에서 온 키"
                },
                {
                  "id": "opt3",
                  "text": "A key that is not unique",
                  "text_ko": "고유하지 않은 키"
                },
                {
                  "id": "opt4",
                  "text": "A column used for sorting",
                  "text_ko": "정렬에 사용되는 컬럼"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A foreign key is used to prevent actions that would destroy links between tables.",
              "explanation_ko": "외래키는 다른 테이블의 기본키를 참조하여 두 테이블 간의 관계를 연결하고 데이터 무결성을 유지하는 데 사용됩니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_foreignkey.asp"
            },
            {
              "id": "q-sql-unique-constraint",
              "type": "multiple-choice",
              "question": "What is the difference between PRIMARY KEY and UNIQUE constraints?",
              "question_ko": "PRIMARY KEY와 UNIQUE 제약 조건의 차이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "PRIMARY KEY cannot be NULL, UNIQUE can (usually once)",
                  "text_ko": "PRIMARY KEY는 NULL이 될 수 없으나, UNIQUE는 가능함 (보통 한 번)"
                },
                {
                  "id": "opt2",
                  "text": "UNIQUE cannot be NULL, PRIMARY KEY can",
                  "text_ko": "UNIQUE는 NULL이 될 수 없으나, PRIMARY KEY는 가능함"
                },
                {
                  "id": "opt3",
                  "text": "There can be multiple PRIMARY KEYs",
                  "text_ko": "여러 개의 PRIMARY KEY가 존재할 수 있음"
                },
                {
                  "id": "opt4",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A table can have multiple UNIQUE constraints but only one PRIMARY KEY. UNIQUE columns can often accept one NULL value.",
              "explanation_ko": "기본키는 테이블당 하나만 존재할 수 있고 NULL을 허용하지 않지만, UNIQUE 제약 조건은 여러 개 설정할 수 있으며 보통 하나의 NULL 값을 허용합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_unique.asp"
            },
            {
              "id": "q-sql-acid",
              "type": "multiple-choice",
              "question": "What does the \"A\" in ACID stand for?",
              "question_ko": "트랜잭션의 ACID 특성 중 \"A\"가 의미하는 것은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Atomicity"
                },
                {
                  "id": "opt2",
                  "text": "Availability"
                },
                {
                  "id": "opt3",
                  "text": "Accuracy"
                },
                {
                  "id": "opt4",
                  "text": "Authorization"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Atomicity ensures that all operations within a transaction are completed; otherwise, the transaction is aborted and rolled back.",
              "explanation_ko": "원자성(Atomicity)은 트랜잭션 내의 모든 작업이 완벽하게 수행되거나, 아니면 전혀 수행되지 않아야 함을 보장합니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/ACID"
            },
            {
              "id": "q-sql-transaction-isolation",
              "type": "multiple-choice",
              "question": "Which isolation level prevents \"Dirty Reads\" but allows \"Non-repeatable Reads\"?",
              "question_ko": "\"Dirty Read\"는 방지하지만 \"Non-repeatable Read\"는 허용하는 격리 수준은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Read Committed"
                },
                {
                  "id": "opt2",
                  "text": "Read Uncommitted"
                },
                {
                  "id": "opt3",
                  "text": "Repeatable Read"
                },
                {
                  "id": "opt4",
                  "text": "Serializable"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Read Committed is the default in many databases (like Postgres). It ensures a transaction only sees data committed before the query began.",
              "explanation_ko": "Read Committed 격리 수준은 커밋된 데이터만 읽을 수 있게 하여 Dirty Read를 방지하지만, 한 트랜잭션 내에서 같은 쿼리를 두 번 실행했을 때 결과가 다를 수 있는 Non-repeatable Read는 발생할 수 있습니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/transaction-iso.html"
            },
            {
              "id": "q-sql-index-btree",
              "type": "multiple-choice",
              "question": "What is the default index type in most relational databases?",
              "question_ko": "대부분의 관계형 DB에서 기본적으로 사용하는 인덱스 구조는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "B-Tree"
                },
                {
                  "id": "opt2",
                  "text": "Hash"
                },
                {
                  "id": "opt3",
                  "text": "Bitmap"
                },
                {
                  "id": "opt4",
                  "text": "GIN"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "B-Tree indexes are the default because they support equality and range searches efficiently.",
              "explanation_ko": "B-Tree 인덱스는 일치(=) 검색뿐만 아니라 범위(>, <) 검색도 효율적으로 지원하므로 대부분의 DB에서 기본 인덱스 구조로 사용됩니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/indexes-types.html"
            },
            {
              "id": "q-sql-rollback",
              "type": "multiple-choice",
              "question": "What command is used to undo changes made in the current transaction?",
              "question_ko": "현재 트랜잭션에서 수행한 변경 사항을 취소하고 이전 상태로 되돌리는 명령은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "ROLLBACK"
                },
                {
                  "id": "opt2",
                  "text": "UNDO"
                },
                {
                  "id": "opt3",
                  "text": "REVERT"
                },
                {
                  "id": "opt4",
                  "text": "CANCEL"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The ROLLBACK command is used to undo transactions that have not yet been saved to the database.",
              "explanation_ko": "ROLLBACK 명령은 아직 커밋되지 않은 트랜잭션의 모든 변경 사항을 취소합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_check.asp"
            },
            {
              "id": "q-sql-deadlock",
              "type": "multiple-choice",
              "question": "What is a database deadlock?",
              "question_ko": "데이터베이스 데드락(Deadlock)이란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Two or more transactions are waiting for each other to release locks",
                  "text_ko": "둘 이상의 트랜잭션이 서로 잠금을 해제하기를 기다리는 상태"
                },
                {
                  "id": "opt2",
                  "text": "A database that has crashed",
                  "text_ko": "데이터베이스가 충돌한 상태"
                },
                {
                  "id": "opt3",
                  "text": "A query that takes too long to run",
                  "text_ko": "실행에 너무 오랜 시간이 걸리는 쿼리"
                },
                {
                  "id": "opt4",
                  "text": "A table with too many indexes",
                  "text_ko": "인덱스가 너무 많은 테이블"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A deadlock occurs when two or more transactions permanently block each other by each having a lock on a resource which the other transaction needs.",
              "explanation_ko": "데드락은 두 개 이상의 트랜잭션이 서로가 가진 자원의 잠금(Lock)이 해제되기를 무한정 기다리며 진행이 멈춘 상태를 말합니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Deadlock"
            },
            {
              "id": "q-sql-check-constraint",
              "type": "multiple-choice",
              "question": "What is the purpose of a CHECK constraint?",
              "question_ko": "CHECK 제약 조건의 용도는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To ensure that all values in a column satisfy a specific condition",
                  "text_ko": "컬럼의 모든 값이 특정 조건을 만족하도록 보장"
                },
                {
                  "id": "opt2",
                  "text": "To check if the database is online",
                  "text_ko": "데이터베이스가 온라인인지 확인"
                },
                {
                  "id": "opt3",
                  "text": "To verify user permissions",
                  "text_ko": "사용자 권한 확인"
                },
                {
                  "id": "opt4",
                  "text": "To check for duplicate rows",
                  "text_ko": "중복 행 확인"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A CHECK constraint ensures that all values in a column satisfy a boolean expression (e.g., age >= 18).",
              "explanation_ko": "CHECK 제약 조건은 컬럼에 저장되는 값이 특정 조건(예: age >= 18)을 만족하는지 확인합니다.",
              "mdnUrl": "https://www.w3schools.com/sql/sql_check.asp"
            },
            {
              "id": "q-sql-index-unique",
              "type": "multiple-choice",
              "question": "Does creating a UNIQUE constraint automatically create an index in most databases?",
              "question_ko": "대부분의 DB에서 UNIQUE 제약 조건을 만들면 자동으로 인덱스가 생성되는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Yes, to enforce the uniqueness constraint efficiently",
                  "text_ko": "네, 고유성 제약 조건을 효율적으로 강제하기 위해"
                },
                {
                  "id": "opt2",
                  "text": "No, indexes must be created separately",
                  "text_ko": "아니요, 인덱스는 별도로 생성해야 함"
                },
                {
                  "id": "opt3",
                  "text": "Only if specified",
                  "text_ko": "지정된 경우에만"
                },
                {
                  "id": "opt4",
                  "text": "Only for primary keys",
                  "text_ko": "기본 키의 경우에만"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Database systems usually implement UNIQUE constraints by creating a unique index on the columns involved.",
              "explanation_ko": "네, 데이터베이스는 중복 여부를 효율적으로 확인하기 위해 UNIQUE 제약 조건이 설정된 컬럼에 자동으로 유니크 인덱스를 생성합니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/indexes-unique.html"
            }
          ]
        },
        {
          "id": "sql-performance",
          "title": "Performance Tuning",
          "title_ko": "성능 튜닝",
          "description": "Query plans, SARGability and indexing.",
          "description_ko": "실행 계획, 인덱스 활용 및 최적화",
          "questions": [
            {
              "id": "q-sql-explain",
              "type": "multiple-choice",
              "question": "What is the purpose of the EXPLAIN command?",
              "question_ko": "EXPLAIN 명령의 용도는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To show the execution plan of a query",
                  "text_ko": "쿼리 실행 계획을 보여주기 위해"
                },
                {
                  "id": "opt2",
                  "text": "To provide documentation for a table",
                  "text_ko": "테이블에 대한 문서를 제공하기 위해"
                },
                {
                  "id": "opt3",
                  "text": "To list all available databases",
                  "text_ko": "모든 사용 가능한 데이터베이스 나열"
                },
                {
                  "id": "opt4",
                  "text": "To translate SQL to English",
                  "text_ko": "SQL을 영어로 번역"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "EXPLAIN shows the execution plan that the database optimizer generates for a given SQL statement.",
              "explanation_ko": "EXPLAIN은 데이터베이스 옵티마이저가 쿼리를 어떻게 실행할 것인지에 대한 계획(Execution Plan)을 보여줍니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/sql-explain.html"
            },
            {
              "id": "q-sql-sargable",
              "type": "multiple-choice",
              "question": "In terms of performance, what does a \"SARGable\" query mean?",
              "question_ko": "성능 관점에서 \"SARGable\" 쿼리란 무엇을 의미하는가?",
              "options": [
                {
                  "id": "opt1",
                  "text": "A query that can take advantage of indexes",
                  "text_ko": "인덱스를 활용할 수 있는 쿼리"
                },
                {
                  "id": "opt2",
                  "text": "A query that runs in parallel",
                  "text_ko": "병렬로 실행되는 쿼리"
                },
                {
                  "id": "opt3",
                  "text": "A query that uses only standard SQL",
                  "text_ko": "표준 SQL만 사용하는 쿼리"
                },
                {
                  "id": "opt4",
                  "text": "A query that returns sorted data",
                  "text_ko": "정렬된 데이터를 반환하는 쿼리"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "SARGable (Search ARGument ABLE) means the DBMS can use an index to speed up the execution of the query. Using functions on indexed columns in a WHERE clause often makes them non-SARGable.",
              "explanation_ko": "SARGable은 인덱스를 효과적으로 사용할 수 있는 쿼리를 의미합니다. WHERE 절의 인덱스 컬럼을 함수로 감싸거나 변형하면 인덱스를 못 쓰게(non-SARGable) 될 수 있습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Sargable"
            },
            {
              "id": "q-sql-index-scan-vs-seek",
              "type": "multiple-choice",
              "question": "What is usually faster: Index Scan or Index Seek?",
              "question_ko": "일반적으로 어느 것이 더 빠른가: Index Scan vs Index Seek?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Index Seek"
                },
                {
                  "id": "opt2",
                  "text": "Index Scan"
                },
                {
                  "id": "opt3",
                  "text": "They are the same"
                },
                {
                  "id": "opt4",
                  "text": "Full Table Scan"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Index Seek is faster because it navigates the index tree to find specific rows, while an Index Scan reads the entire index.",
              "explanation_ko": "Index Seek은 인덱스 트리를 타고 필요한 부분만 찾으므로 전체 인덱스를 훑는 Index Scan보다 빠릅니다.",
              "mdnUrl": "https://use-the-index-luke.com/"
            },
            {
              "id": "q-sql-n-plus-1",
              "type": "multiple-choice",
              "question": "How can you solve the N+1 query problem from the SQL perspective?",
              "question_ko": "SQL 관점에서 N+1 쿼리 문제를 해결하는 방법은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "Using JOINs to fetch all required data in a single query",
                  "text_ko": "조인을 사용하여 단일 쿼리에서 필요한 모든 데이터 가져오기"
                },
                {
                  "id": "opt2",
                  "text": "Adding more indexes",
                  "text_ko": "인덱스 추가"
                },
                {
                  "id": "opt3",
                  "text": "Using more subqueries",
                  "text_ko": "서브쿼리 추가 사용"
                },
                {
                  "id": "opt4",
                  "text": "Splitting the query into smaller ones",
                  "text_ko": "쿼리를 더 작게 쪼개기"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "The N+1 problem occurs when an application makes one query to get N records and then N additional queries to get related data. Using a JOIN solves this by fetching everything at once.",
              "explanation_ko": "N+1 문제는 메인 데이터를 가져온 뒤 연관 데이터를 가져오기 위해 N번의 추가 쿼리를 실행하는 비효율을 말합니다. JOIN을 사용하여 한 번의 쿼리로 데이터를 모두 가져와 해결할 수 있습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping#The_N+1_select_problem"
            },
            {
              "id": "q-sql-composite-index",
              "type": "multiple-choice",
              "question": "When using a composite index on (A, B), which query can use the index?",
              "question_ko": "(A, B)로 구성된 복합 인덱스가 있을 때, 인덱스를 탈 수 있는 쿼리는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "WHERE A = 1 AND B = 2"
                },
                {
                  "id": "opt2",
                  "text": "WHERE B = 2"
                },
                {
                  "id": "opt3",
                  "text": "WHERE B = 2 OR A = 1"
                },
                {
                  "id": "opt4",
                  "text": "All of the above"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A composite index can be used if the leading column (A) is part of the query filter. Filters on only the second column (B) generally cannot use the index.",
              "explanation_ko": "복합 인덱스는 선행 컬럼(A)이 조건절에 포함되어야 인덱스를 탈 수 있습니다. (B) 컬럼만으로 필터링하면 인덱스를 제대로 활용할 수 없습니다.",
              "mdnUrl": "https://use-the-index-luke.com/sql/where-clause/the-multicolumn-index"
            },
            {
              "id": "q-sql-covering-index",
              "type": "multiple-choice",
              "question": "What is a \"Covering Index\"?",
              "question_ko": "\"커버링 인덱스(Covering Index)\"란?",
              "options": [
                {
                  "id": "opt1",
                  "text": "An index that contains all columns required by the query",
                  "text_ko": "쿼리에 필요한 모든 컬럼을 포함하는 인덱스"
                },
                {
                  "id": "opt2",
                  "text": "An index that covers multiple tables",
                  "text_ko": "여러 테이블을 커버하는 인덱스"
                },
                {
                  "id": "opt3",
                  "text": "An index used to hide sensitive data",
                  "text_ko": "민감한 데이터를 숨기기 위한 인덱스"
                },
                {
                  "id": "opt4",
                  "text": "A temporary index",
                  "text_ko": "임시 인덱스"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "A covering index is one where the index itself contains all the data needed to satisfy the query, so the database doesn't need to look up the actual table rows (Index Only Scan).",
              "explanation_ko": "커버링 인덱스는 쿼리에 필요한 모든 컬럼을 인덱스가 다 가지고 있어, 실제 테이블 데이터를 찾으러 가지 않고 인덱스만으로 조회가 끝나는 상태를 말합니다.",
              "mdnUrl": "https://use-the-index-luke.com/sql/clustering/index-only-scan"
            },
            {
              "id": "q-sql-cardinality",
              "type": "multiple-choice",
              "question": "In the context of indexing, what does \"Cardinality\" refer to?",
              "question_ko": "인덱싱에서 \"카디널리티(Cardinality)\"가 의미하는 것은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "The number of unique values in a column",
                  "text_ko": "컬럼의 고유 값 개수"
                },
                {
                  "id": "opt2",
                  "text": "The total number of rows in a table",
                  "text_ko": "테이블의 전체 행 수"
                },
                {
                  "id": "opt3",
                  "text": "The size of the index on disk",
                  "text_ko": "디스크 내 인덱스 크기"
                },
                {
                  "id": "opt4",
                  "text": "The time it takes to create an index",
                  "text_ko": "인덱스 생성에 걸리는 시간"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "High cardinality means a column has many unique values (like user_id). Low cardinality means many duplicates (like gender). Indexes are generally more effective on high-cardinality columns.",
              "explanation_ko": "카디널리티는 특정 컬럼에 있는 고유 값의 개수입니다. 카디널리티가 높은(고유한 값이 많은) 컬럼일수록 인덱스 효율이 좋습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Cardinality_(SQL_statements)"
            },
            {
              "id": "q-sql-materialized-view-perf",
              "type": "multiple-choice",
              "question": "What is the performance advantage of a Materialized View over a standard View?",
              "question_ko": "일반 뷰와 비교했을 때 구체화된 뷰(Materialized View)의 성능상 이점은?",
              "options": [
                {
                  "id": "opt1",
                  "text": "The result is physically stored and can be indexed",
                  "text_ko": "결과가 물리적으로 저장되고 인덱싱될 수 있음"
                },
                {
                  "id": "opt2",
                  "text": "It is always automatically updated",
                  "text_ko": "항상 자동으로 업데이트됨"
                },
                {
                  "id": "opt3",
                  "text": "It uses less memory",
                  "text_ko": "메모리를 적게 사용함"
                },
                {
                  "id": "opt4",
                  "text": "It can only be used with simple queries",
                  "text_ko": "단순한 쿼리에만 사용 가능"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Materialized views store the query result on disk, allowing for much faster access to complex aggregations, though they must be refreshed to show new data.",
              "explanation_ko": "구체화된 뷰는 쿼리 결과를 물리적으로 저장하므로 복잡한 계산을 미리 해둘 수 있고, 인덱스도 생성할 수 있어 조회 속도가 매우 빠릅니다.",
              "mdnUrl": "https://www.postgresql.org/docs/current/rules-materializedviews.html"
            },
            {
              "id": "q-sql-full-table-scan",
              "type": "multiple-choice",
              "question": "When might an optimizer choose a Full Table Scan even if an index exists?",
              "question_ko": "인덱스가 있음에도 옵티마이저가 풀 테이블 스캔(Full Table Scan)을 선택하는 경우는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "When the query is expected to return a large percentage of the table's rows",
                  "text_ko": "쿼리가 테이블 행의 상당 부분을 반환할 것으로 예상될 때"
                },
                {
                  "id": "opt2",
                  "text": "When the table is very small",
                  "text_ko": "테이블이 매우 작을 때"
                },
                {
                  "id": "opt3",
                  "text": "Both of the above",
                  "text_ko": "위의 두 경우 모두"
                },
                {
                  "id": "opt4",
                  "text": "None of the above",
                  "text_ko": "해당 사항 없음"
                }
              ],
              "correctAnswerId": "opt3",
              "explanation": "Optimizers may skip indexes if they estimate that a full scan will be cheaper, which is often true for very small tables or queries that return most of the data.",
              "explanation_ko": "테이블 자체가 매우 작거나, 쿼리 결과가 전체 행의 상당 부분을 차지할 것으로 예상되면 인덱스를 타는 것보다 한 번에 다 읽는 것이 더 빠를 수 있습니다.",
              "mdnUrl": "https://en.wikipedia.org/wiki/Full_table_scan"
            },
            {
              "id": "q-sql-batch-size",
              "type": "multiple-choice",
              "question": "Why is it better to perform large deletions or updates in batches?",
              "question_ko": "대규모 삭제나 업데이트를 배치(Batch) 단위로 나누어 수행하는 것이 좋은 이유는?",
              "options": [
                {
                  "id": "opt1",
                  "text": "To avoid locking the table for too long and blowing up the transaction log",
                  "text_ko": "테이블 잠금이 너무 길어지거나 트랜잭션 로그가 가득 차는 것을 방지하기 위해"
                },
                {
                  "id": "opt2",
                  "text": "To make the query more complex",
                  "text_ko": "쿼리를 더 복잡하게 만들기 위해"
                },
                {
                  "id": "opt3",
                  "text": "Batching is always slower",
                  "text_ko": "배치 처리가 항상 더 느림"
                },
                {
                  "id": "opt4",
                  "text": "The database will automatically batch it anyway",
                  "text_ko": "어차피 데이터베이스가 자동으로 배치 처리함"
                }
              ],
              "correctAnswerId": "opt1",
              "explanation": "Large single transactions can lock rows for long periods, blocking other users, and can exceed transaction log limits.",
              "explanation_ko": "거대한 트랜잭션 하나는 오랫동안 락을 유지하여 다른 작업을 방해하고 트랜잭션 로그를 가득 채울 수 있으므로, 적절한 크기로 나누어 처리하는 것이 안전합니다.",
              "mdnUrl": "https://stackoverflow.com/questions/1000331/batch-delete-in-sql-server"
            }
          ]
        }
      ]
    }
  ]
};
