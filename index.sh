ECHO "======================"
ECHO "1. QUERY"
ECHO "select ID, UserName, (SELECT UserName from USER where ID = user.parent) as ParentUserName from USER as user"
ECHO "======================"


ECHO "======================="
ECHO "3. Refactor code"
ECHO "======================="

node refactor/index.js

ECHO "======================="
ECHO "4. Anagram"
ECHO "======================="

node anagram/index.js
