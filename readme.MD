# Backend task

```Question
    1. Query SQL 
    2. Movie 
    3. Refactor ("./refactor/index.js")
    4. Anagram ("./anagram/index.js") 
```

### Requirement

- Nodejs v12.22.1
- NPM 6.14.12
- Docker (optional)
- Mysql version 8.0.15

##How to run 

- for number 3&4 could use ``` sh index.sh ``` <br>
- for number 2 could use ``` sh index.sh ```  inside folder movie to run with docker or use 
``node index.js`` don't forget to copy local.env [./const/local.env]


###Endpoint 
``http://localhost:3001/search?s=moana&y=2016&page=1``
<table>
<tr>
<td>parameter</td>
<td>description</td>
<td>mandatory</td>
</tr>
<tr>
<td>s</td>
<td>title</td>
<td>yes</td>
</tr>

<tr>
<td>y</td>
<td>Years</td>
<td>no</td>
</tr>

<tr>
<td>page</td>
<td>page</td>
<td>no, by default is 1</td>
</tr>

</table>

```http://localhost:3001/detail/:id```
<table>
<tr>
<td>parameter</td>
<td>description</td>
<td>mandatory</td>
</tr>
<tr>
<td>:id</td>
<td>id</td>
<td>yes</td>
</tr>
</table>
