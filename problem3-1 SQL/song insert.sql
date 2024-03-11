-- artist
INSERT INTO Artists (name) VALUES ('John Lennon'), ('Queen'), ('Eagles'), ('Taylor Swift'), ('Nirvana'), ('Adele'), ('Johnny Cash'), ('Elvis Presley'), ('Michael Jackson'), ('Guns N\' Roses');

-- genres
INSERT INTO Genres (genre_name) VALUES ('Rock'), ('Pop'), ('Opera'), ('Grunge'), ('Soul'), ('Country'), ('Blues'), ('Funk'), ('Disco'), ('Hard Rock');

-- songs
INSERT INTO Songs (title, artist_id, year) VALUES 
('Imagine', (SELECT artist_id FROM Artists WHERE name = 'John Lennon'), 1971),
('Bohemian Rhapsody', (SELECT artist_id FROM Artists WHERE name = 'Queen'), 1975),
('Hotel California', (SELECT artist_id FROM Artists WHERE name = 'Eagles'), 1977),
('Shake It Off', (SELECT artist_id FROM Artists WHERE name = 'Nirvana'), 2014),
('Smells Like Teen Spirit', (SELECT artist_id FROM Artists WHERE name = 'Queen'), 1991),
('Rolling in the Deep', (SELECT artist_id FROM Artists WHERE name = 'Adele'), 2010),
('Ring of Fire', (SELECT artist_id FROM Artists WHERE name = 'Johnny Cash'), 1963),
('Hound Dog', (SELECT artist_id FROM Artists WHERE name = 'Elvis Presley'), 1956),
('Thriller', (SELECT artist_id FROM Artists WHERE name = 'Michael Jackson'), 1982),
('Sweet Child o\' Mine', (SELECT artist_id FROM Artists WHERE name = 'Guns N\' Roses'), 1987);

-- songs with genres
INSERT INTO SongGenres (song_id, genre_id) VALUES 
((SELECT song_id FROM Songs WHERE title = 'Imagine'), (SELECT genre_id FROM Genres WHERE genre_name = 'Rock')),
((SELECT song_id FROM Songs WHERE title = 'Imagine'), (SELECT genre_id FROM Genres WHERE genre_name = 'Pop')),
((SELECT song_id FROM Songs WHERE title = 'Bohemian Rhapsody'), (SELECT genre_id FROM Genres WHERE genre_name = 'Rock')),
((SELECT song_id FROM Songs WHERE title = 'Bohemian Rhapsody'), (SELECT genre_id FROM Genres WHERE genre_name = 'Opera')),
((SELECT song_id FROM Songs WHERE title = 'Hotel California'), (SELECT genre_id FROM Genres WHERE genre_name = 'Rock')),
((SELECT song_id FROM Songs WHERE title = 'Shake It Off'), (SELECT genre_id FROM Genres WHERE genre_name = 'Pop')),
((SELECT song_id FROM Songs WHERE title = 'Smells Like Teen Spirit'), (SELECT genre_id FROM Genres WHERE genre_name = 'Rock')),
((SELECT song_id FROM Songs WHERE title = 'Smells Like Teen Spirit'), (SELECT genre_id FROM Genres WHERE genre_name = 'Grunge')),
((SELECT song_id FROM Songs WHERE title = 'Rolling in the Deep'), (SELECT genre_id FROM Genres WHERE genre_name = 'Pop')),
((SELECT song_id FROM Songs WHERE title = 'Rolling in the Deep'), (SELECT genre_id FROM Genres WHERE genre_name = 'Soul')),
((SELECT song_id FROM Songs WHERE title = 'Ring of Fire'), (SELECT genre_id FROM Genres WHERE genre_name = 'Country')),
((SELECT song_id FROM Songs WHERE title = 'Hound Dog'), (SELECT genre_id FROM Genres WHERE genre_name = 'Rock')),
((SELECT song_id FROM Songs WHERE title = 'Hound Dog'), (SELECT genre_id FROM Genres WHERE genre_name = 'Blues')),
((SELECT song_id FROM Songs WHERE title = 'Thriller'), (SELECT genre_id FROM Genres WHERE genre_name = 'Pop')),
((SELECT song_id FROM Songs WHERE title = 'Thriller'), (SELECT genre_id FROM Genres WHERE genre_name = 'Funk')),
((SELECT song_id FROM Songs WHERE title = 'Thriller'), (SELECT genre_id FROM Genres WHERE genre_name = 'Disco')),
((SELECT song_id FROM Songs WHERE title = 'Sweet Child o\' Mine'), (SELECT genre_id FROM Genres WHERE genre_name = 'Rock')),
((SELECT song_id FROM Songs WHERE title = 'Sweet Child o\' Mine'), (SELECT genre_id FROM Genres WHERE genre_name = 'Hard Rock'));