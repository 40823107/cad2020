var tipuesearch = {"pages": [{'title': 'About', 'text': '在用ssh時發生錯誤導致無法push，遠端和近端無法連接所以重新做過網頁，做得不好請見諒。 \n Github: https://github.com/40823107/cad2020 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'W1-W3', 'text': 'solidworks2016 體積: \n \n \n', 'tags': '', 'url': 'W1-W3.html'}, {'title': '13-24(solidworks2016)', 'text': '13.\xa0 \n 14.\xa0 \n 15.\xa0 \n 16.\xa0 \n 17.\xa0 \n 18.\xa0 \n 19.\xa0 \n 20.\xa0 \n 21.\xa0 \n 22.\xa0 \n 23.\xa0 \n 24.\xa0 \n', 'tags': '', 'url': '13-24(solidworks2016).html'}, {'title': 'W4-W6', 'text': '若是在倉儲內找不到downloads \n \n 1.fall2020/data/tmp/scad/.gitignore \n 2. .gitignore移至SciTE,刪掉downloads/ \n \n push後就能找到downloads \n \n', 'tags': '', 'url': 'W4-W6.html'}, {'title': 'ssh', 'text': '點選資料夾的Portablegit →bin→sh.exe \n 輸入ssh-keygen -t rsa -b 4096 -C "40823107" \n enter →輸入/y/tmp/id_rsa \n \n 下載 putty 、 putty_home 、 GitExtensions \n 將start移到SciTE\xa0 並新增\xa0 \n set GIT_HOME=%Disk%:\\Portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n 打開.git資料夾，把config移SciTE \n 新增 [remote "origin"]裡的 url = git@github.com:40823107/cad2020.git \n \n file→save \n 打開putty資料夾的puttygen.exe \n 點load，找到id_rsa \n \n 是→Save private key→是→40823107.ppk \n 打開putty.exe \n 若沒有github.com，在Host Name和Save Sessions打 github.com按Save \n \n 設定proxy(使用自家網路、手機網路請選None) \n \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案40823107.ppk \n \n 回到session點選save再open \n 在home新增.ssh資料夾 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n  \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n  \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 將上面的指令複製到SciTE並另存config \n 到倉儲網頁新增金鑰(右上Settings) \n 點New SSH key \n \n 到tmp找到id_rsa.pub並用SciTE開啟，複製內容到Key \n \n 並確認學號 \n \n Add SSH key \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'W7-W9', 'text': '', 'tags': '', 'url': 'W7-W9.html'}, {'title': 'tcc', 'text': '下載並修改路徑，所使用.c程式在SciTE進行 \n TAST1. \n \n TAST2. \n \n', 'tags': '', 'url': 'tcc.html'}, {'title': 'tcc轉換', 'text': '將.c檔轉換成.py檔，並執行py檔 \n tcc -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE multiply.c -o multiply.dll \n \n tcc -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE multiply_float.c -o multiply_float.dll \n \n', 'tags': '', 'url': 'tcc轉換.html'}, {'title': '分組作業', 'text': '', 'tags': '', 'url': '分組作業.html'}, {'title': 'tast1', 'text': '由組員畫出平面三視圖 \n \n 我使用Solidworks2016畫出3D立體圖 \n \n', 'tags': '', 'url': 'tast1.html'}, {'title': 'tast2', 'text': '由其他組員畫出 \n 組合圖 \n \n 三視圖 \n \n', 'tags': '', 'url': 'tast2.html'}, {'title': 'tast3', 'text': '由其他組員畫出 \n 組合圖 \n \n 三視圖 \n \n 我使用Solidworks2016畫出3D立體圖 \n \n', 'tags': '', 'url': 'tast3.html'}, {'title': 'Improve English Ability', 'text': "最常用的 2000 個英文字彙 \n 常用的 2000 + 800 個英文字彙 \n A- a/an, a few, a little, a lot, a.m., able, about, above, abroad, across, act, action, actor, actress, actually, afraid, after, afternoon, again, age, ago, agree, ahead, air, airplane(plane), airport, all, allow, almost, along, already, also, always, America, American,and, angle, angry, animal, another, answer, ant, any, anyone(anybody), anything, apartment, appear, apple, April, area, arm, around, arrive, art, as, ask, at, attack, August, aunt, autumn(fall), away B- baby, back, bad, badminton, bag, bake, bakery, balcony, banana, band, bank, baseball, basket, basketball, bat, bath, bathroom, be(am, is, are, was, were, been), beach, bean, bear, beautiful, because, become, bed, bedroom, bee, beef, before, begin, behind, believe, bell, belong, below, belt, bench, beside, between, bicycle(bike), big, bird, birthday, bite, black, blackboard, blank, blanket, blind, block, blow, blue, boat, body, boil, book, bookstore, bored, boring, born, borrow, boss, both, bottle, bottom, bow, bowl, box, boy, brave, bread, break, breakfast, bridge, bright, bring, brother, brown, brush, bug, build, bun, burn, bus, business, businessman, busy, but, butter, butterfly,button, buy, by C- cake, call, camera, camp, can, could, candle, candy, cap, car, card, care, careful, carry, case, castle, cat, catch, celebrate, cellphone, cent, center, centimeter, chair, chalk, chance, change, cheap, cheat, check, cheer, cheese, chicken,\xa0 child, China,\xa0 Chinese, chocolate, choice, choose,\xa0 chopsticks, Christmas, church, circle, city, clap, class, classmate, classroom,clean, clear, clerk, climb, clock, close, clothes, cloud, cloudy, club, coat, coffee, cold,\xa0 collect,\xa0 color,\xa0 comb,\xa0 come,\xa0 comfortable,\xa0 comic,\xa0 common,\xa0 computer, convenient, cook, cookie, cool, copy, corner, correct, cost, couch, count, country, course, cousin, cover, cow, crazy, cross, cry, cup, cut, cute \xa0\xa0 \xa0 D- dance,dangerous,dark,date,daughter,day,dead,deal,dear,death,December,decide,deep,define,delicious,dentist,department store,desk,dictionary,die,different,difficult,dig,dining room,dinner,dirty,dish,do (does, did, done),doctor(Dr.),dog,doll,dollar,door,dot,down,download,dozen,draw,drawer,dream,dress,drink,drive,driver,drop,drum,dry,duck,during \xa0\xa0 \xa0 E- each,ear,early,earth,earthquake,east,Easter, easy,eat,egg,eight,eighteen,eighty,either,elementary school,elephant,eleven,else,e-mail,end,engineer,English, enjoy,enough,enter,envelope,eraser,error,eve,even,evening,ever,every,everyone(everybody),everything,example,excellent,except,excited,exciting,excuse,exercise,expect,expensive,experience,explain,eye \xa0\xa0 \xa0 F- face,fact,factory,fail,fall,family,famous,fan,far,farm,farmer,fast,fat,father(dad, daddy),favorite,February,feed,feel,festival,fever,few, 55fifteen,fifty,fight,file,fill,finally,find,fine,finger,finish,fire,first,fish,fisherman,five,fix,floor,flower,fly,follow,food,fool,foot,for,foreign,foreigner,forget,fork,forty,four,fourteen,fox,free,fresh,Friday,friend,friendly,fries(French fries),frog,from,front,fruit,fry,full,fun,funny,future \xa0\xa0 \xa0 G- game, garden, garbage, gas, gate, get, ghost, giant, gift, girl, give, glad, glass, glasses, glove, glue, go, goat, god, good, good-bye(goodbye, bye), goose, grade, gram, grandfather(grandpa), grandmother(grandma), grape, grass, gray, great, green, ground, group, grow, guava, guess, guitar, guy, gym H- habit, hair, half, Halloween, ham, hamburger (burger), hand, handsome, hang, happen, happy, hard, hard-working, hat, hate, have (has, had), he (him, his, himself), head, headache, health, healthy, hear, heart, heat, heavy, height, hello, help, helpful, hen, here, hey, hi, hide, high, hike, hill, history, hit, hobby, hold, holiday, home, homework, honest, honey, hope, horse, hospital, hot, hot dog, hotel, hour, house, housewife, how, however, hundred, hungry, hunt, hurry, hurt, husband I- I(me, my, mine, myself), ice, ice cream, idea, if, important, in, inch, insect, inside, interest, interested, interesting, Internet (Net), interview, into, invite, island, it(its, itself), item \xa0\xa0 \xa0 J- jacket, January, jeans, job, jog, join, joke, joy, juice, July, jump, June, junior high school, just K- keep, key, kick, kid, kill, kilogram, kind, king, kiss, kitchen, kite, knee, knife, knock, know, knowledge L- lake, lamp, land, language, large, last, late, later, laugh, lawyer, lazy, lead, leader, learn, least, leave, left, leg, lemon, lend, less, lesson, let, letter, level, library, lie, life, light, like, line, lion, lip, list, listen, little,live, living room, lonely, long, look, lose, loud, love, lovely, low, lucky, lunch M- machine, mad, magic, mail, mailman(mail carrier), main, make, man, many, map, March, mark, marker, market, married, mask, math(mathematics), matter, may (might), May,maybe, meal, mean, meat, medicine, medium, meet, meeting, member, menu, metro, middle, mile, milk, million, mind, minute, Miss, miss, mistake, modern, moment, Monday, money, monkey, month, moon, more, morning, mop, most, mother (mom, mommy), motorcycle, mountain, mouse, mouth, move, movie, Mr., Mrs., Ms., much, mud, museum, music, must N- nail, name, national, nature, near, neck, need, neighbor, never, new, news, newspaper, next, nice, night, nine, nineteen, ninety, no, nobody, noise, noisy, noodle, noon,north, nose, not, note, notebook, nothing, notice, November, now, number, nurse O- o'clock, October, of, off, office, officer, often, oil, OK, old, on, once, one, only, open, or,\xa0 orange, order, other, out, outside, over, own P- p.m., pack, package, page, paint, pair, pants, papaya, paper, parent, park, part, 56party, pass, past, paste, pay, PE(physical education), peach, pear, pen, pencil, people, perhaps, person, pet, photo, piano, pick, picnic, picture, pie, piece, pig, pin, pink, pipe, pizza, place, plan, planet, plant, plate, play, player, playground, please, pleasure, pocket, point, police, polite, pond, pool, poor, pop, popcorn, popular, pork, possible, post office, postcard, pot, pound, power, probably, practice, pray, prepare, present, pretty, price, prize, problem, program, proud, public, pull, pumpkin, puppy, purple, push, put \xa0\xa0 \xa0 Q- quarter, queen, question, quick, quiet, quite, quiz R- rabbit, race, radio, rain, rainbow, rainy, raise, rat, reach, read, ready, real, really, reason, red, refrigerator (fridge), relative, remember, repeat, report, reporter, rest, restaurant, restroom, rice, rich, ride, right, ring, rise, river, road, robot, R.O.C./ROC,rock, roll, room, root, rope, rose, round, row, rule, ruler, run S- sad, safe, sail, salad, sale, salesman, salt, same, sandwich, Saturday, save, say, scared, school, science, scooter, screen, sea, season, seat, second, secretary, see, seed, seesaw, seldom, sell, send, senior high school, sentence, September, serious, service, set, seven, seventeen, seventy, several, shake, shape, share, sharp, she (her, hers, herself), sheep, shine, ship, shirt, shoe(s), shop, shopkeeper, short, shorts, should, shoulder, shout, show, shower, shy, sick, side, sidewalk, sight, sign, simple, since, sing, singer, sir, sister, sit, six, sixteen, sixty, size, skirt, sky, sleep, slide, slim, slow, small, smart, smell, smile, smoke, snack, snake, snow, snowy, so, soccer, socks, sofa, soldier, some, someone(somebody), something, sometimes, somewhere, son, song, soon, sore, sorry, sound, soup, south, space, speak, special, spell, spend, spider, spoon, sports, spring, square, stairs, stamp, stand, star, start, station, stay, steak, still, stomach, stop, store, story, straight, strange, stranger, strawberry, street, string, strong,student, study, stupid, subject, successful, sugar, summer, sun, Sunday, sunny, supermarket, sure, surf, surprise, surprised, sweater, sweet, swim, swing T- table, tail, Taiwan, take, talk, tall, tape, taste, taxi, tea, teach, teacher, team, teenager, telephone(phone), television(TV), tell, temple, ten, tennis, terrible, test, than, thank, that, the, theater, then, there, these, they(them, their, theirs, themselves), thick, thin, thing, think, third, thirsty, thirteen, thirty, this, those, though(although), thousand, three, throat, through, throw, Thursday, ticket, tidy, tie, tiger, time, tip, tired, to, toast, today, toe, together, tomato, tomorrow, tonight, too, tool, tooth, top, topic, total, touch, towel, town, toy, traffic, train, trash, treat, tree, trick, trip, trouble, truck, true, try, T-shirt, Tuesday, turn, turtle, twelve, twenty, twice, two, type, typhoon U- ugly, umbrella, uncle, under, understand, unhappy, uniform, until, up, upload, U.S.A./USA, use, useful, usually V- vacation, vegetable, very, video, violin, visit, visitor, voice W- wait, waiter, waitress, wake, walk, wall, wallet, want, warm, wash, watch, water, watermelon, wave, way, we (us, our, ours, ourselves), weak, wear, weather, Wednesday, week, weekend, welcome, well, west, wet, what, when, where, whether, which, while, white, who, whose, why, wide, wife, will(would), win, wind, window, windy, winter, wise, wish, with, without, woman, wonderful, word, work, workbook, worker, world, worry, write, writer, wrong \xa0\xa0 \xa0 X- Y- yard, year, yellow, yes(yeah), yesterday, yet, you(your, yours, yourself, yourselves), young, yummy Z- zebra, zero, zoo 其他常用800字（依字母排列） A- absent,\xa0 accept,\xa0 accident,\xa0 active,\xa0 activity,\xa0 add,\xa0 address,\xa0 admire,\xa0 adult, advertisement, advice, advise, affect, against, aim, air conditioner, airlines, alarm, album, alike, alive, alone, aloud, alphabet, altogether, ambulance, among, amount, ancient,angel,anger, ankle, anywhere, apologize, appreciate, argue, armchair, army, arrange, artist, asleep, assistant, assume, attention, available, avoid B- baby sitter, backpack, backward, ball, balloon,barbecue,barber, bark, base, basement, basic, bathe, beard, beat, beauty, beer, beginner, beginning, behave, besides, beyond, bill, biology, bitter, blame, bless, blood, blouse, board, bomb, bone, bookcase, bother, bowling, branch, brick, broad, broadcast, brunch, bucket, buffet, building, bundle, burger, burst C- cabbage,\xa0 cable,\xa0 cafeteria, cage,\xa0 calendar,\xa0 calm,\xa0 campus,\xa0 cancel,\xa0 cancer, captain, careless, carpet, carrot, cartoon, cash, cause, ceiling, central, century, cereal, certain, channel, character, charge, chart, chase, chemistry, chess,\xa0 childhood,\xa0 childish,\xa0 childlike,\xa0 chin,\xa0 chubby,\xa0 classical,\xa0 clever, climate,\xa0 closet,\xa0 coach,\xa0 coast,\xa0 cockroach,\xa0 coin, cola,\xa0 college,\xa0 colorful, command, comment,company, compare, complain, complete, concern,confident,confuse,\xa0 congratulation,\xa0 consider,\xa0 considerate,\xa0 contact\xa0 lens,\xa0 continue, contract,\xa0 control,\xa0 convenience\xa0 store,\xa0 conversation,\xa0 corn,\xa0 cotton,\xa0 cough, couple, courage, court, cowboy,crab, crayon, cream, create, credit card, crime, crowd, crowded, cruel, culture, cure, curious, current, curtain, curve, custom, customer D- daily, damage, danger, dawn, deaf, debate, decision, decorate, decrease, deer, degree, deliver, department, depend, describe, desert, design, desire, dessert, detect, develop, dial, diamond, diary, diet, difference, difficulty, diligent, diplomat,\xa0 dinosaur,\xa0 direct,\xa0 direction,\xa0 disappear,\xa0 discover,\xa0 discuss, discussion, dishonest, distance, distant, divide, dizzy, dodgeball, dolphin, donkey, double, doubt, doughnut, downstairs, downtown, dragon, drama, dresser, drugstore, dryer, dumb, dumpling, duty E- eagle, earn, earrings, ease, edge, education, effort, elder, elect, electric, embarrass, emotion, emphasize, employ, empty, enemy, energetic, energy, engine, 58entrance, environment, envy, equal, especially, event, everywhere, evil, exam, excite, exist, exit, express, extra F- fair,false, fancy, fantastic, fashionable, faucet, fault, fear, fee, feeling, female, fence, film, final, fit, flag, flashlight, flat tire, flight, flour, flu, flute, focus, fog, foggy, foolish, football, forest, forgive, form, formal, former,\xa0 forward,\xa0 frank,\xa0 freedom,\xa0 freezer,\xa0 freezing,\xa0 friendship,\xa0 frighten,frisbee, furniture G- gain, garage, gather, general, generous, genius, gentle, gentleman, geography, gesture,\xa0 goal,\xa0 gold,\xa0 golden,\xa0 golf,\xa0 goodness,\xa0 government,\xa0 granddaughter, grandson, greedy, greet, guard, guest, guide, gun H- hair dresser, haircut, hall, hammer, handkerchief, handle, hanger, hardly, heater, helicopter, hero, highway, hip, hippo, hire, hole, homesick, honesty, hop, horrible, host, housework, hug, human, humble, humid, humor, humorous, hunger, hunter I- ignore,\xa0 ill,\xa0 imagine,\xa0 impolite,\xa0 importance,\xa0 impossible,\xa0 improve,\xa0 include, income, increase, independent, indicate, influence, information, ink, insist,inspire,\xa0\xa0 instant,\xa0\xa0 instrument,\xa0\xa0 intelligent,\xa0\xa0 international,\xa0\xa0 interrupt, introduce, invent, invitation, iron J- jam, jazz, jealous, jeep, journalist, judge K- kangaroo, ketchup, kilometer, kindergarten, kingdom, kitten,koalaL-lack, lady, lamb, lantern, latest, latter, law, lay, leaf, lettuce, lick, lid, lift, lightning, likely, limit, link, liquid, liter, loaf, local, lock, locker, loser M- ma'am, magazine, magician, major, male, mall, manager, mango, manner, marry, marvelous,\xa0 mass,\xa0 master, mat,\xa0 match,\xa0 maximum,\xa0 meaning,\xa0 measure,mechanic, memory, men's room, message, metal, meter, method, microwave, midnight, minor, minus, mirror, mix, model, monster, mosquito, motion, movement, MRT, musician N- napkin, narrow, nation, natural, naughty, nearly, necessary, necklace, needle, negative, neither, nephew, nervous, nest, net, nice-looking, niece,nod, none, nor, novel, nut O- obey, object, ocean, offer, omit, oneself, onion, operation, opinion, ordinary, oven, overpass, overseas, over-weight, owner, ox P- pain, painful, painter, pajamas, pale, pan, panda, pardon, parking lot, parrot, partner, passenger, path, patient, pattern, pause, peace, peaceful, pepper, perfect, period, personal, physics, pigeon, pile, pillow, pineapple, plain, platform, pleasant, pleased, plus, poem, poison, pollute, pollution, pop music, population, position, positive, potato, powder, praise, precious, president, pressure,\xa0 priest,\xa0 primary, prince, princess,\xa0 principal,\xa0 principle,\xa0 print, printer, private, produce, production, professor, progress, project, promise, pronounce, protect, provide, pump, punish, purpose, purse, puzzle \xa0\xa0 \xa0 Q- quit R- railroad, railway, raincoat, rare, rather, realize, receive, record, recover, rectangle, recycle, refuse, regret, regular, reject, remind, rent,repair, respect, responsible, result, return, review, revise, rob, role, roller skate (roller blade),roof, rub, rubber, rude, ruin, rush \n", 'tags': '', 'url': 'Improve English Ability.html'}, {'title': 'W15-W18', 'text': '', 'tags': '', 'url': 'W15-W18.html'}]};