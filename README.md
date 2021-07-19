# Clean Blog Project 

# Clean Blog 1. Ödev
- CleanBlog proje klasörünü oluşturalım.
- Package.json dosyasını oluşturalım.
- Prettier ayarlarını yapalım.(İsteğe bağlı)
- Express ve Nodemon modüllerini indirelim.
- git init ile lokal repomuzu oluşturalım.
- get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
- .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.

# Clean Blog 2. Ödev
- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
- EJS modülünü indirelim.
- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
- Partials klasör yapısını oluşturalım.
- İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.

# Clean Blog 3. Ödev
- **cleanblog-test-db** adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
- "Add New Post" sayfamızdan göndericeğimiz veriler **req.body** ile yakalayalım, gerekli middleware fonksiyonlarını kullanalım.
- ```title:String, detail:String, dateCreated:Date(default now)``` özelliklerine sahip Post modelini oluşturalım.
- Veri tabanımızda 3 adet post dökümanı oluşturalım.
- Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

#Clean Blog Projesi 4. Ödev
- index.ejs içerisinde /posts/<%= posts[i]._id %> ile _id bilgisini gönderelim.
- app.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "_id" yi yakalayalım. .
- tekil post bilgilerini post.ejs dosyasına gönderelim.
- post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)
