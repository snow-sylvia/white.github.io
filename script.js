  <!DOCTYPE html>
  <html>
  <head>
    <title>班級行事曆</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color: #f2f2f2;
      }
      .event {
        background-color: #f2f2f2;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 5px;
      }
    </style>
  </head>
  <body>
    <h1>班級行事曆</h1>
    <table id="calendar">
      <thead>
        <tr>
          <th>日期</th>
          <th>事件</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    <script>
      // 定義事件資料
      const events = [
        { date: '2024-07-01', title: '期中考試' },
        { date: '2024-07-15', title: '期末考試' },
        { date: '2024-08-01', title: '畢業典禮' },
        { date: '2024-09-01', title: '新學期開始' }
      ];

      // 將事件資料渲染到行事曆表格中
      const calendarBody = document.getElementById('calendar').getElementsByTagName('tbody')[0];
      events.forEach(event => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        dateCell.textContent = event.date;
        const eventCell = document.createElement('td');
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.textContent = event.title;
        eventCell.appendChild(eventDiv);
        row.appendChild(dateCell);
        row.appendChild(eventCell);
        calendarBody.appendChild(row);
      });
    </script>
  </body>
  </html>
