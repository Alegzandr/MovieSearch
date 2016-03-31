$(function () {
    $('.form-horizontal').submit(function () {
        $.ajax({
            url: 'search',
            type: 'get',
            data: $(this).serialize(),
            dataType: 'json',
            success: function (data) {
                var film = '';
                var tableBody = $('tbody');
                var filmTable = $('#displayFilms');
                tableBody.html(filmTable);
                for (var i in data.films) {
                    second = data.films[i].duration;
                    minutes = second / 60;
                    second = second % 60;
                    hour = minutes / 60;
                    minutes = minutes % 60;
                    film = tableBody.append(
                        '<tr><td>' + data.films[i].title + '</td><br>' +
                        '<td>' + data.films[i].year + '</td><br>' +
                        '<td>' + data.films[i].synopsis + '</td><br>' +
                        '<td>' + data.films[i].first_name + '</td><br>' +
                        '<td>' + data.films[i].last_name + '</td><br>' +
                        '<td>' + Math.trunc(hour) + 'h' + Math.trunc(minutes) + '</td><br></tr>'
                    );
                }
                if (data.artist) {
                    for (var z in data.artist) {
                        second = data.artist[z].duration;
                        minutes = second / 60;
                        second = second % 60;
                        hour = minutes / 60;
                        minutes = minutes % 60;
                        film = tableBody.append(
                            '<tr><td>' + data.artist[z].title + '</td><br>' +
                            '<td>' + data.artist[z].year + '</td><br>' +
                            '<td>' + data.artist[z].synopsis + '</td><br>' +
                            '<td>' + data.artist[z].first_name + '</td><br>' +
                            '<td>' + data.artist[z].last_name + '</td><br>' +
                            '<td>' + Math.trunc(hour) + 'h' + Math.trunc(minutes) + '</td><br></tr>'
                        );
                    }
                }
                if (data.artistName) {
                    for (var x in data.artistName) {
                        second = data.artistName[x].duration;
                        minutes = second / 60;
                        second = second % 60;
                        hour = minutes / 60;
                        minutes = minutes % 60;

                        film = tableBody.append(
                            '<tr><td>' + data.artistName[x].title + '</td><br>' +
                            '<td>' + data.artistName[x].year + '</td><br>' +
                            '<td>' + data.artistName[x].synopsis + '</td><br>' +
                            '<td>' + data.artistName[x].first_name + '</td><br>' +
                            '<td>' + data.artistName[x].last_name + '</td><br>' +
                            '<td>' + Math.trunc(hour) + 'h' + Math.trunc(minutes) + '</td><br></tr>'
                        );
                    }
                }
                if (data.error) {
                    film = tableBody.append(
                        '<tr><td>' + data.error + '</td><td></td><td></td><td></td><td></td><td></td><br>'
                    );
                }
            },
            error: function (data, status, error) {
                var toPrint = '';
                data = JSON.parse(data.responseText);
                for (var d in data.errors) {
                    toPrint += d + ' :' + data.errors[d] + '<br>';
                }
                console.log(toPrint);
            }
        });

        return false;
    });
});
