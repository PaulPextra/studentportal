window.onload = function() {
    // Student-Form Submit Operation
    $('#student-form').submit(function() {
        let firstName = $('#firstName').val();
        let middleName = $('#middleName').val();
        let lastName = $('#lastName').val();
        let email = $('#email').val();
        let dob = $('#dob').val();
        let gender = $('input[name=gender]:checked', '#student-form').val();
        let phone = $('#phone').val();
        let address = $('#address').val();
        let state = $('#state').val();
        let lga = $('#lga').val();
        let nok = $('#nok').val();
        let jambScore = $('#jamb').val();
        let image = $('#image').val().replace("C:\\fakepath\\", "");
        
        $.ajax({
            url: '/portal/students/form',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                'firstName': firstName,
                'middleName': middleName,
                'lastName': lastName,
                'email': email,
                'dob': dob,
                'gender': gender,
                'phone': phone,
                'address': address,
                'state': state,
                'lga': lga,
                'nok': nok,
                'jambScore': jambScore,
                'image': image
            }),
            contentType: 'application/json, charset=UTF-8',
            success: function(data) {
                if(data) {
                    window.location.href = '/admin/dashboard'
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    });

    // Search-Form Submit Operation
    $('#search-form').submit(function() {
        let name = $('#search-name').val();
        let status = $('#search-status').val();
        let gender = $('#search-gender').val();
        let jambScore = $('#search-jambscore').val();
        
        
        $.ajax({
            url: '/admin/dashboard',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                'name': name,
                'status': status,
                'gender': gender,
                'jambScore': jambScore
            }),
            contentType: 'application/json, charset=UTF-8',
            success: function(data) {
                if(data) {
                    location.reload()
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    });

    // Change Status Form
    $("select.change-status").change(function() {
        var status = $(this).children("option:selected").val();
        var id = $(this).attr('id')
        // alert("You have changed your admission status - " + status);
        $.ajax({
            url: '/portal/students/'+ id,
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                'status': status
            }),
            contentType: 'application/json, charset=UTF-8',
            success: function(data) {
                if(data) {
                    location.reload()
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
}

// State-Local-Government Operation
function populate(state, lga) {
    var state = document.getElementById(state);
    var lga = document.getElementById(lga);

    lga.innerHTML = "";

    if(state.value == "Abia") {
        var lgaArray = [
            "Aba North",
            "Aba South",
            "Arochukwu",
            "Bende",
            "Ikwuano",
            "Isiala Ngwa North",
            "Isiala Ngwa South",
            "Isuikwuato",
            "Obi Ngwa",
            "Ohafia",
            "Osisioma",
            "Ugwunagbo",
            "Ukwa East",
            "Ukwa West",
            "Umuahia North",
            "Umuahia South",
            "Umu Nneochi"
        ];
    }
    else if(state.value == "Adamawa") {
        var lgaArray = [
            "Demsa",
            "Fufure",
            "Ganye",
            "Gayuk",
            "Gombi",
            "Grie",
            "Hong",
            "Jada",
            "Lamurde",
            "Madagali",
            "Maiha",
            "Mayo Belwa",
            "Michika",
            "Mubi North",
            "Mubi South",
            "Numan",
            "Shelleng",
            "Song",
            "Toungo",
            "Yola North",
            "Yola South"
        ];
    }
    else if(state.value == "Akwa Ibom") {
        var lgaArray = [
            "Abak",
            "Eastern Obolo",
            "Eket",
            "Esit Eket",
            "Essien Udim",
            "Etim Ekpo",
            "Etinan",
            "Ibeno",
            "Ibesikpo Asutan",
            "Ibiono-Ibom",
            "Ika",
            "Ikono",
            "Ikot Abasi",
            "Ikot Ekpene",
            "Ini",
            "Itu",
            "Mbo",
            "Mkpat-Enin",
            "Nsit-Atai",
            "Nsit-Ibom",
            "Nsit-Ubium",
            "Obot Akara",
            "Okobo",
            "Onna",
            "Oron",
            "Oruk Anam",
            "Udung-Uko",
            "Ukanafun",
            "Uruan",
            "Urue-Offong Oruko",
            "Uyo"
        ];
    }
    else if(state.value == "Anambra") {
        var lgaArray = [
            "Aguata",
            "Anambra East",
            "Anambra West",
            "Anaocha",
            "Awka North",
            "Awka South",
            "Ayamelum",
            "Dunukofia",
            "Ekwusigo",
            "Idemili North",
            "Idemili South",
            "Ihiala",
            "Njikoka",
            "Nnewi North",
            "Nnewi South",
            "Ogbaru",
            "Onitsha North",
            "Onitsha South",
            "Orumba North",
            "Orumba South",
            "Oyi"
        ];
    }
    else if(state.value == "Bauchi") {
        var lgaArray = [
            "Alkaleri",
            "Bauchi",
            "Bogoro",
            "Damban",
            "Darazo",
            "Dass",
            "Gamawa",
            "Ganjuwa",
            "Giade",
            "Itas Gadau",
            "Jamaare",
            "Katagum",
            "Kirfi",
            "Misau",
            "Ningi",
            "Shira",
            "Tafawa Balewa",
            "Toro",
            "Warji",
            "Zaki"
        ];
    }
    else if(state.value == "Bayelsa") {
        var lgaArray = [
            "Brass",
            "Ekeremor",
            "Kolokuma Opokuma",
            "Nembe",
            "Ogbia",
            "Sagbama",
            "Southern Ijaw",
            "Yenagoa"
        ];
    }
    else if(state.value == "Benue") {
        var lgaArray = [
            "Agatu",
            "Apa",
            "Ado",
            "Buruku",
            "Gboko",
            "Guma",
            "Gwer East",
            "Gwer West",
            "Katsina-Ala",
            "Konshisha",
            "Kwande",
            "Logo",
            "Makurdi",
            "Obi",
            "Ogbadibo",
            "Ohimini",
            "Oju",
            "Okpokwu",
            "Oturkpo",
            "Tarka",
            "Ukum",
            "Ushongo",
            "Vandeikya"
        ];
    }
    else if(state.value == "Borno") {
        var lgaArray = [
            "Abadam",
            "Askira Uba",
            "Bama",
            "Bayo",
            "Biu",
            "Chibok",
            "Damboa",
            "Dikwa",
            "Gubio",
            "Guzamala",
            "Gwoza",
            "Hawul",
            "Jere",
            "Kaga",
            "Kala Balge",
            "Konduga",
            "Kukawa",
            "Kwaya Kusar",
            "Mafa",
            "Magumeri",
            "Maiduguri",
            "Marte",
            "Mobbar"
        ];
    }
    else if(state.value== "Cross River") {
        var lgaArray = [
            "Abi",
            "Akamkpa",
            "Akpabuyo",
            "Bakassi",
            "Bekwarra",
            "Biase",
            "Boki",
            "Calabar Municipal",
            "Calabar South",
            "Etung",
            "Ikom",
            "Obanliku",
            "Obubra",
            "Obudu",
            "Odukpani",
            "Ogoja",
            "Yakuur",
            "Yala"
        ];
    }
    else if(state.value == "Delta") {
        var lgaArray = [
            "Aniocha North",
            "Aniocha South",
            "Bomadi",
            "Burutu",
            "Ethiope East",
            "Ethiope West",
            "Ika North East",
            "Ika South",
            "Isoko North",
            "Isoko South",
            "Ndokwa East",
            "Ndokwa West",
            "Okpe",
            "Oshimili North",
            "Oshimili South",
            "Patani",
            "Sapele",
            "Udu",
            "Ughelli North",
            "Ughelli South",
            "Ukwuani",
            "Uvwie",
            "Warri North",
            "Warri South",
            "Warri South West"
        ];
    }
    else if(state.value == "Ebonyi") {
        var lgaArray = [
            "Abakaliki",
            "Afikpo North",
            "Afikpo South",
            "Ebonyi",
            "Ezza North",
            "Ezza South",
            "Ikwo",
            "Ishielu",
            "Ivo",
            "Izzi",
            "Ohaozara",
            "Ohaukwu",
            "Onicha"
        ];
    }
    else if(state.value == "Edo") {
        var lgaArray = [
            "Akoko-Edo",
            "Egor",
            "Esan Central",
            "Esan North-East",
            "Esan South-East",
            "Esan West",
            "Etsako Central",
            "Etsako East",
            "Etsako West",
            "Igueben",
            "Ikpoba Okha",
            "Orhionmwon",
            "Oredo",
            "Ovia North-East",
            "Ovia South-West",
            "Owan East",
            "Owan West",
            "Uhunmwonde"
        ];
    }
    else if(state.value == "Ekiti") {
        var lgaArray = [
            "Ado Ekiti",
            "Efon",
            "Ekiti East",
            "Ekiti South-West",
            "Ekiti West",
            "Emure",
            "Gbonyin",
            "Ido Osi",
            "Ijero",
            "Ikere",
            "Ikole",
            "Ilejemeje",
            "Irepodun Ifelodun",
            "Ise Orun",
            "Moba",
            "Oye"
        ];
    }
    else if(state.value == "Enugu") {
        var lgaArray = [
            "Aninri",
            "Awgu",
            "Enugu East",
            "Enugu North",
            "Enugu South",
            "Ezeagu",
            "Igbo Etiti",
            "Igbo Eze North",
            "Igbo Eze South",
            "Isi Uzo",
            "Nkanu East",
            "Nkanu West",
            "Nsukka",
            "Oji River",
            "Udenu",
            "Udi",
            "Uzo Uwani"
        ];
    }
    else if(state.value == "FCT") {
        var lgaArray = [
            "Abaji",
            "Bwari",
            "Gwagwalada",
            "Kuje",
            "Kwali",
            "Municipal Area Council"
        ];
    }
    else if(state.value == "Gombe") {
        var lgaArray = [
            "Akko",
            "Balanga",
            "Billiri",
            "Dukku",
            "Funakaye",
            "Gombe",
            "Kaltungo",
            "Kwami",
            "Nafada",
            "Shongom",
            "Yamaltu Deba"
        ];
    }
    else if(state.value == "Imo") {
        var lgaArray = [
            "Aboh Mbaise",
            "Ahiazu Mbaise",
            "Ehime Mbano",
            "Ezinihitte",
            "Ideato North",
            "Ideato South",
            "Ihitte Uboma",
            "Ikeduru",
            "Isiala Mbano",
            "Isu",
            "Mbaitoli",
            "Ngor Okpala",
            "Njaba",
            "Nkwerre",
            "Nwangele",
            "Obowo",
            "Oguta",
            "Ohaji Egbema",
            "Okigwe",
            "Orlu",
            "Orsu",
            "Oru East",
            "Oru West",
            "Owerri Municipal",
            "Owerri North",
            "Owerri West",
            "Unuimo"
        ];
    }
    else if(state.value == "Jigawa") {
        var lgaArray = [
            "Auyo",
            "Babura",
            "Biriniwa",
            "Birnin Kudu",
            "Buji",
            "Dutse",
            "Gagarawa",
            "Garki",
            "Gumel",
            "Guri",
            "Gwaram",
            "Gwiwa",
            "Hadejia",
            "Jahun",
            "Kafin Hausa",
            "Kazaure",
            "Kiri Kasama",
            "Kiyawa",
            "Kaugama",
            "Maigatari",
            "Malam Madori",
            "Miga",
            "Ringim",
            "Roni",
            "Sule Tankarkar",
            "Taura",
            "Yankwashi"
        ];
    }
    else if(state.value == "Kaduna") {
        var lgaArray = [
            "Birnin Gwari",
            "Chikun",
            "Giwa",
            "Igabi",
            "Ikara",
            "Jaba",
            "Jemaa",
            "Kachia",
            "Kaduna North",
            "Kaduna South",
            "Kagarko",
            "Kajuru",
            "Kaura",
            "Kauru",
            "Kubau",
            "Kudan",
            "Lere",
            "Makarfi",
            "Sabon Gari",
            "Sanga",
            "Soba",
            "Zangon Kataf",
            "Zaria"
        ];
    }
    else if(state.value == "Kano") {
        var lgaArray = [
            "Ajingi",
            "Albasu",
            "Bagwai",
            "Bebeji",
            "Bichi",
            "Bunkure",
            "Dala",
            "Dambatta",
            "Dawakin Kudu",
            "Dawakin Tofa",
            "Doguwa",
            "Fagge",
            "Gabasawa",
            "Garko",
            "Garun Mallam",
            "Gaya",
            "Gezawa",
            "Gwale",
            "Gwarzo",
            "Kabo",
            "Kano Municipal",
            "Karaye",
            "Kibiya",
            "Kiru",
            "Kumbotso",
            "Kunchi",
            "Kura",
            "Madobi",
            "Makoda",
            "Minjibir",
            "Nasarawa",
            "Rano",
            "Rimin Gado",
            "Rogo",
            "Shanono",
            "Sumaila",
            "Takai",
            "Tarauni",
            "Tofa",
            "Tsanyawa",
            "Tudun Wada",
            "Ungogo",
            "Warawa",
            "Wudil"
        ];
    }
    else if(state.value == "Katsina") {
        var lgaArray = [
            "Bakori",
            "Batagarawa",
            "Batsari",
            "Baure",
            "Bindawa",
            "Charanchi",
            "Dandume",
            "Danja",
            "Dan Musa",
            "Daura",
            "Dutsi",
            "Dutsin Ma",
            "Faskari",
            "Funtua",
            "Ingawa",
            "Jibia",
            "Kafur",
            "Kaita",
            "Kankara",
            "Kankia",
            "Katsina",
            "Kurfi",
            "Kusada",
            "MaiAdua",
            "Malumfashi",
            "Mani",
            "Mashi",
            "Matazu",
            "Rimi",
            "Sabuwa",
            "Safana",
            "Sandamu",
            "Zango"
        ];
    }
    else if(state.value == "Kebbi") {
        var lgaArray = [
            "Aleiro",
            "Arewa Dandi",
            "Argungu",
            "Augie",
            "Bagudo",
            "Birnin Kebbi",
            "Bunza",
            "Dandi",
            "Fakai",
            "Gwandu",
            "Jega",
            "Kalgo",
            "Koko Besse",
            "Maiyama",
            "Ngaski",
            "Sakaba",
            "Shanga",
            "Suru",
            "Wasagu Danko",
            "Yauri",
            "Zuru"
        ];
    }
    else if(state.value == "Kwara") {
        var lgaArray = [
            "Asa",
            "Baruten",
            "Edu",
            "Ekiti",
            "Ifelodun",
            "Ilorin East",
            "Ilorin South",
            "Ilorin West",
            "Irepodun",
            "Isin",
            "Kaiama",
            "Moro",
            "Offa",
            "Oke Ero",
            "Oyun",
            "Pategi"
        ];
    }
    else if(state.value == "Lagos") {
        var lgaArray = [
            "Agege",
            "Ajeromi-Ifelodun",
            "Alimosho",
            "Amuwo-Odofin",
            "Apapa",
            "Badagry",
            "Epe",
            "Eti Osa",
            "Ibeju-Lekki",
            "Ifako-Ijaiye",
            "Ikeja",
            "Ikorodu",
            "Kosofe",
            "Lagos Island",
            "Lagos Mainland",
            "Mushin",
            "Ojo",
            "Oshodi-Isolo",
            "Shomolu",
            "Surulere"
        ];
    }
    else if(state.value == "Nasarawa") {
        var lgaArray = [
            "Akwanga",
            "Awe",
            "Doma",
            "Karu",
            "Keana",
            "Keffi",
            "Kokona",
            "Lafia",
            "Nasarawa",
            "Nasarawa Egon",
            "Obi",
            "Toto",
            "Wamba"
        ];
    }
    else if(state.value == "Niger") {
        var lgaArray = [
            "Agaie",
            "Agwara",
            "Bida",
            "Borgu",
            "Bosso",
            "Chanchaga",
            "Edati",
            "Gbako",
            "Gurara",
            "Katcha",
            "Kontagora",
            "Lapai",
            "Lavun",
            "Magama",
            "Mariga",
            "Mashegu",
            "Mokwa",
            "Moya",
            "Paikoro",
            "Rafi",
            "Rijau",
            "Shiroro",
            "Suleja",
            "Tafa",
            "Wushishi"
        ];
    }
    else if(state.value == "Ogun") {
        var lgaArray = [
            "Abeokuta North",
            "Abeokuta South",
            "Ado-Odo Ota",
            "Egbado North",
            "Egbado South",
            "Ewekoro",
            "Ifo",
            "Ijebu East",
            "Ijebu North",
            "Ijebu North East",
            "Ijebu Ode",
            "Ikenne",
            "Imeko Afon",
            "Ipokia",
            "Obafemi Owode",
            "Odeda",
            "Odogbolu",
            "Ogun Waterside",
            "Remo North",
            "Shagamu"
        ];
    }
    else if(state.value == "Ondo") {
        var lgaArray = [
            "Akoko North-East",
            "Akoko North-West",
            "Akoko South-West",
            "Akoko South-East",
            "Akure North",
            "Akure South",
            "Ese Odo",
            "Idanre",
            "Ilaje",
            "Ile Oluji Okeigbo",
            "Irele",
            "Odigbo",
            "Okitipupa",
            "Ondo East",
            "Ondo West",
            "Ose",
            "Owo"
        ];
    }
    else if(state.value == "Osun") {
        var lgaArray = [
            "Atakunmosa East",
            "Atakunmosa West",
            "Aiyedaade",
            "Aiyedire",
            "Boluwaduro",
            "Boripe",
            "Ede North",
            "Ede South",
            "Ife Central",
            "Ife East",
            "Ife North",
            "Ife South",
            "Egbedore",
            "Ejigbo",
            "Ifedayo",
            "Ifelodun",
            "Ila",
            "Ilesa East",
            "Ilesa West",
            "Irepodun",
            "Irewole",
            "Isokan",
            "Iwo",
            "Obokun",
            "Odo Otin",
            "Ola Oluwa",
            "Olorunda",
            "Oriade",
            "Orolu",
            "Osogbo"
        ];
    }
    else if(state.value == "Oyo") {
        var lgaArray = [
            "Afijio",
            "Akinyele",
            "Atiba",
            "Atisbo",
            "Egbeda",
            "Ibadan North",
            "Ibadan North-East",
            "Ibadan North-West",
            "Ibadan South-East",
            "Ibadan South-West",
            "Ibarapa Central",
            "Ibarapa East",
            "Ibarapa North",
            "Ido",
            "Irepo",
            "Iseyin",
            "Itesiwaju",
            "Iwajowa",
            "Kajola",
            "Lagelu",
            "Ogbomosho North",
            "Ogbomosho South",
            "Ogo Oluwa",
            "Olorunsogo",
            "Oluyole",
            "Ona Ara",
            "Orelope",
            "Ori Ire",
            "Oyo",
            "Oyo East",
            "Saki East",
            "Saki West",
            "Surulere"
        ];
    }
    else if(state.value == "Plateau") {
        var lgaArray = [
            "Bokkos",
            "Barkin Ladi",
            "Bassa",
            "Jos East",
            "Jos North",
            "Jos South",
            "Kanam",
            "Kanke",
            "Langtang South",
            "Langtang North",
            "Mangu",
            "Mikang",
            "Pankshin",
            "Quaan Pan",
            "Riyom",
            "Shendam",
            "Wase"
        ];
    }
    else if(state.value == "Rivers") {
        var lgaArray = [
            "Abua Odual",
            "Ahoada East",
            "Ahoada West",
            "Akuku-Toru",
            "Andoni",
            "Asari-Toru",
            "Bonny",
            "Degema",
            "Eleme",
            "Emuoha",
            "Etche",
            "Gokana",
            "Ikwerre",
            "Khana",
            "Obio Akpor",
            "Ogba Egbema doni",
            "Ogu Bolo",
            "Okrika",
            "Omuma",
            "Opobo Nkoro",
            "Oyigbo",
            "Port Harcourt",
            "Tai"
        ];
    }
    else if(state.value == "Sokoto") {
        var lgaArray = [
            "Binji",
            "Bodinga",
            "Dange Shuni",
            "Gada",
            "Goronyo",
            "Gudu",
            "Gwadabawa",
            "Illela",
            "Isa",
            "Kebbe",
            "Kware",
            "Rabah",
            "Sabon Birni",
            "Shagari",
            "Silame",
            "Sokoto North",
            "Sokoto South",
            "Tambuwal",
            "Tangaza",
            "Tureta",
            "Wamako",
            "Wurno",
            "Yabo"
        ];
    }
    else if(state.value == "Taraba") {
        var lgaArray = [
            "Ardo Kola",
            "Bali",
            "Donga",
            "Gashaka",
            "Gassol",
            "Ibi",
            "Jalingo",
            "Karim Lamido",
            "Kumi",
            "Lau",
            "Sardauna",
            "Takum",
            "Ussa",
            "Wukari",
            "Yorro",
            "Zing"
        ];
    }
    else if(state.value == "Yobe") {
        var lgaArray = [
            "Bade",
            "Bursari",
            "Damaturu",
            "Fika",
            "Fune",
            "Geidam",
            "Gujba",
            "Gulani",
            "Jakusko",
            "Karasuwa",
            "Machina",
            "Nangere",
            "Nguru",
            "Potiskum",
            "Tarmuwa",
            "Yunusari",
            "Yusufari"
        ];
    }
    else if(state.value == "Zamfara") {
        var lgaArray = [
            "Anka",
            "Bakura",
            "Birnin MagajiKiyaw",
            "Bukkuyum",
            "Bungudu",
            "Gummi",
            "Gusau",
            "Kaura Namoda",
            "Maradun",
            "Maru",
            "Shinkafi",
            "Talata Mafara",
            "Chafe",
            "Zurmi"
        ];
    }

    for(var option in lgaArray) {
        var pair = lgaArray[option].split(",");
        var newOption = document.createElement("option");

        newOption.value = pair[0];
        newOption.innerHTML = pair[0];
        lga.options.add(newOption);
    }
}
