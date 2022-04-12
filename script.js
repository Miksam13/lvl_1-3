function DataTable (config, data) {
  let usersTable = document.getElementById("usersTable");
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

  usersTable.appendChild(table);
	table.appendChild(thead);
  let tr = document.createElement('tr'); 
  thead.appendChild(tr);

  for(let i = 0; i < config.columns.length; i++) {
    let th = document.createElement('th');
    th.innerHTML = config.columns[i].title;
    tr.appendChild(th); 
  }

  table.appendChild(tbody);

  for(let y = 0; y < data.length; y++) {
    let tr = document.createElement('tr'); 
    tbody.appendChild(tr);
    let arr = [users[y].id, users[y].name, users[y].surname, users[y].age];
    for (let i = 0; i < config.columns.length; i++) {
      let td = document.createElement('td');
      td.innerHTML = arr[i];
      tr.appendChild(td);
    }
  }
}

const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: 'number'},
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname'},
    {title: 'Возраст', value: 'age'},
  ]
};

//Изменяемая таблица данных 
const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

DataTable(config1, users)