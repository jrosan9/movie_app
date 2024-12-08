const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const movieGenres = await prisma.genres.createMany({
      data: [
        {
          name: "Action",
        },
        {
          name: "Anime",
        },
        {
          name: "Classics",
        },
        {
          name: "Comedy",
        },
        {
          name: "Crime",
        },
        {
          name: "Cult",
        },
        {
          name: "Documentaries",
        },
        {
          name: "Drama",
        },
        {
          name: "Fantasy",
        },
        {
          name: "Faith & Spirituality",
        },
        {
          name: "Holidays",
        },
        {
          name: "Horror",
        },
        {
          name: "International",
        },
        {
          name: "Music & Musicals",
        },
        {
          name: "Romance / RomCom",
        },
        {
          name: "Stand - up",
        },
        {
          name: "Thriller",
        },
        {
          name: "Sci - Fi",
        },
      ],
    });
    const genres = await prisma.genres.findMany({
      where: {
        name: {
          in: [
            "Action",
            "Anime",
            "Classics",
            "Comedy",
            "Crime",
            "Cult",
            "Documentaries",
            "Drama",
            "Fantasy",
            "Faith & Spirituality",
            "Holidays",
            "Horror",
            "International",
            "Music & Musicals",
            "Romance / RomCom",
            "Stand - up",
            "Thriller",
            "Sci - Fi",
          ],
        },
      },
    });

    if (genres.length === 0) {
      console.log("No genres found");
      return;
    }

    const moviesArrayData = [
      {
        name: "Midway",
        img: "https://i0.wp.com/reeltalker.com/wp-content/uploads/2020/02/midway_banner.jpg?fit=1422%2C800",
        trending: true,
        description:
          "On Dec. 7, 1941, Japanese forces launch a devastating attack on Pearl Harbor, the U.S. naval base in Hawaii. Six months later, the Battle of Midway commences on June 4, 1942, as the Japanese navy once again plans a strike against American ships in the Pacific.",
        top10: true,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Action").id },
            { id: genres.find((genre) => genre.name === "International").id },
          ],
        },
      },
      // 1
      {
        name: "Captain Philips",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeLw1EjMosO2ewMbc4NhtxdYkWX9JuRSSCA&s",
        trending: false,
        description:
          "In April 2009, the U.S. containership Maersk Alabama sails toward its destination on a day that seems like any other. Suddenly, Somali pirates race toward the vessel, climb aboard and take everyone hostage. ",
        top10: false,
        genres: {
          connect: [{ id: genres.find((genre) => genre.name === "Action").id }],
        },
      },
      {
        name: "Salt",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe42XSt1ByfTTwMkW_aRGuas5ioBPJM5u2TLyUmtltdY070b2JB9k3rZOv65OVVO7dBseDTBbo34y5qvouT1QnwjdLKdOVB2v5q4nCRd-_xJN3a0MtWoutYcljN0iAJuel9yR4ROaMiTsm5NzeIXXySeU4-oFvPz2WMvdn0f0yICAJHj48TvaAyRP4DajPzVS_yirlwcg3JmOWaRcR6bRdNutGD343vKQen0FYhitPUN92ecIvm-eMwBQ-rcdmNASOyTi8y5qP2mObKIZIBj0CF9dA.webp?r=269",
        trending: false,
        description:
          "When Evelyn Salt (Angelina Jolie) became a CIA officer, she swore an oath to duty, honor and country. But, when a defector accuses her of being a Russian spy, Salt's oath is put to the test. Now a fugitive, Salt must use every skill gained from years of training and experience to evade capture, but the more she tries to prove her innocence, the more guilty she seems.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
            {
              id: genres.find((genre) => genre.name === "Horror").id,
            },
          ],
        },
      },
      // [1, 5, 12]
      {
        name: "Scarface",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZF21lLe-NlgXO9e2tA6BP5UNnuOo3cf8GOeRFy1Y92l02h5Qd6724xbwW4GWDLJ9CfpkdLnKvntCCxykQ25YlDrey3O1KVGGHfKRsvkAS5T4fneHwS7-itDuXsyYxa_D6O27K19WVgFAnlNExS0BIr50b59TYql218pjRqpSPYkriyDzPrjA1Xbe2EY7c4TJ4Bh_TLLrp26K_o07dkDM1fCbgADyByL-AlahKxNrnHYPv-jIK9Z7TdEVOWBwEwtqS1IV72ow01-QD0E0X3s0IJ_-A.webp?r=c99",
        trending: false,
        description:
          "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana (Al Pacino) stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
          ],
        },
      },
      {
        name: "Unhinged",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEhext9V0DXtME5CsgGU_Ep3y2uDnDsP4Uw&s",
        trending: true,
        description:
          "Rachel is a single mother whose bad day gets even worse when she beeps her horn at a fellow driver during rush-hour traffic. After an exchange of words, she soon realizes that the mysterious man is following her and her young son in his truck.  ",
        top10: true,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
            {
              id: genres.find((genre) => genre.name === "Thriller").id,
            },
          ],
        },
      },
      {
        name: "Nowhere",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQpEO6iqWEkhEgicbyRTNi39uWwiOwxeswkWxj_SzhWPbjK3cHnkQDjk4lU2GRISJHxgIQA8pcUDfm8cK2IjCi1AKEWKRXNX1CSncZ_vfCYiHIrSZCA5CMOA9hEPteMn8rQu.jpg?r=4f8",
        trending: true,
        description:
          "Fleeing a totalitarian country, pregnant Mia must fight for her life when a violent storm knocks the container in which she has been hiding overboard. Trapped, Mia gives birth and is forced to survive to save her baby. ",
        top10: true,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
            {
              id: genres.find((genre) => genre.name === "Drama").id,
            },
            {
              id: genres.find((genre) => genre.name === "Thriller").id,
            },
          ],
        },
      },
      {
        name: "21 Jump Street",
        img: "https://m.media-amazon.com/images/I/919CiVIYu-L._AC_UF894,1000_QL80_.jpg",
        trending: false,
        description:
          "When cops Schmidt (Jonah Hill) and Jenko (Channing Tatum) join the secret Jump Street unit, they use their youthful appearances to go under cover as high-school students.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Comedy").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
          ],
        },
      },
      {
        name: "Sextuplets",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABev_T6wFCXv3i08Br3lc4SX1wNdLcyFytWmcYdOP0GqJqGE_bQTm6iLkpK1O_0HUJDx2LfLgXrmGYOpBt4vE4Rt6CXIE1HWF6ZiZw_4UKBdqXwXmdO6OnRV5TYsKQYvb2Yh0.jpg?r=55d",
        trending: false,
        description:
          "When expecting father Alan discovers he has five siblings he's never met before, he decides to reconcile and meet his long lost family before his baby is born.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Comedy").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
          ],
        },
      },
      {
        name: "White Chicks",
        img: "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_QL75_UX190_CR0,0,190,281_.jpg",
        trending: false,
        description:
          "Two FBI agent brothers, Marcus (Marlon Wayans) and Kevin Copeland (Shawn Wayans), accidentally foil a drug bust. As punishment, they are forced to escort a pair of socialites (Anne Dudek, Rochelle Aytes) to the Hamptons.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Comedy").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
          ],
        },
      },
      {
        name: "American Psycho",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQFwISLYY547lrX1t02VPnaTOqYYEuCVX5JdAdyQF1vIxQH3_c9A9MXbwgd9MsNWGR2QGb0gjMcWujqsFjndKB3Mxv-Dl2EPkmJ0-npxS2pDMbEp8-j6zx6dpZL1o7yMKxWeWYqd1BO8ZblCGlk7FSjIonk1INxN67vEGkpKHX6TdGkHzJ1-XX6XHEQyCFFzTPDzRKRl-U3vff3pgG953mOYv2Ep1RQYYZrfLcjRH0r6yD6UKbjhyQFIhf0jWtvO1zc0JMzXuqrEha9qCjJhplX3IQ.webp?r=f33",
        trending: false,
        description:
          "In New York City in 1987, a handsome, young urban professional, Patrick Bateman (Christian Bale), lives a second life as a gruesome serial killer by night.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Cult").id,
            },
            {
              id: genres.find((genre) => genre.name === "Comedy").id,
            },
          ],
        },
      },
      {
        name: "The sentinel",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmqVukuh_wKMkPe8Kjm4dHDELCO5D6Rw81-CS14dWGHKp-0T_Beb_AlFQfwZ7Vqf9A79Ko4sNBnAo0dEo4KkOstC3UabJS-0UKCigX-zR40SEpEoLu9FJGOxbuunOBoNT8Ub_GGYTX40wbnsgIXuBaCL_4f4nM-C4OeAHhajk41hEfYtW27QYqslr0DuP7Zjox9Qu4DaPJNDUX61ahm9Vl9_RczXvltMhj9XJ3uJigr4WfIJ2G-oxt0JlZ03pJZQWM7c-RqpcK_0oTxYRWYJ0JFiA.webp?r=d24",
        trending: false,
        description:
          "Secret Service agent Pete Garrison (Michael Douglas) investigates a colleague's murder and subsequently becomes a suspect due to the machinations of a blackmailer who knows the secret he is hiding.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Cult").id,
            },
          ],
        },
      },
      {
        name: "Ice Road",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUVPbYSYuCYpADtYUGJb4-GVdEOchNlGX15KQR5QCOZc9NyyB2DkRpMPaCOuq0TSRYe4uAW2IcUAjgl6q-YQKflui2D9Y4LrPGbyNLeeW_DMjhxg9WXiJeVmhCcrWHXV3mza.jpg?r=48b",
        trending: true,
        description:
          "After a remote diamond mine collapses in the far northern regions of Canada, an ice driver leads an implausible rescue mission over a frozen ocean to save the lives of trapped miners despite thawing waters and a threat they never see coming.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Cult").id,
            },
            {
              id: genres.find((genre) => genre.name === "Comedy").id,
            },
          ],
        },
      },
      {
        name: "The postcard killings",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVVii9o_jFzhCjDACDViFNAj3T9FJSUNy-HeuAj4IG-1wwxYzxn0SfE_8JVpJOgFkA9cH4N7v7TQRs2plLE7hITGKurGWWZkhk8.webp?r=ce9",
        trending: false,
        description:
          "A New York City detective investigates the death of his daughter, who was murdered on her honeymoon in London, and discovers the existence of a serial killer.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Drama").id,
            },
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
          ],
        },
      },
      {
        name: "Our Little Secret",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY3SMXkn6KmQI9pIJxR_ojOZ0d4-WLYFsZYW-BZKFBDjo9vngMXGlgbodGGtJjveLzQaudrIi5KeIQ0h0N9x09ek4-recZ1WpKePPZngjvw05758wHZT-9kf3SLZs4BmLqXSn_1dcXGI1g45wC2GesDhNhNTWjpaasde4_EVdxyuYsyaNPifxPLjWb-ayAIG_MXUxJnGCcW3qOXacgjUcDxrH6PYhGQ8lmRGE-3_zajnGX1dDAvCc_a28RXvQ6CwnUg_60P2U1-uer25BMYSru2JCDOGD_9ZJx5QynHFpFC-IWrHAtHFBpGpBJ-3Id93EeanO9aQOkd6a9FRehdCYEufy01rrALkIG04GqhcVWHib_Tf-wU.jpg?r=b2e",
        trending: true,
        description:
          "After discovering their significant others are siblings, two resentful exes must spend Christmas under one roof while hiding their romantic history",
        top10: true,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Faith & Spirituality")
                .id,
            },
            {
              id: genres.find((genre) => genre.name === "Holidays").id,
            },
          ],
        },
      },
      {
        name: "Polar Express",
        img: "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_.jpg",
        trending: true,
        description:
          "A young boy who has grown skeptical of Santa Claus is shocked to see a train stop outside his window on Christmas Eve, destined for the North Pole.",
        top10: true,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Faith & Spirituality")
                .id,
            },
            {
              id: genres.find((genre) => genre.name === "Holidays").id,
            },
            {
              id: genres.find((genre) => genre.name === "International").id,
            },
            {
              id: genres.find((genre) => genre.name === "Music & Musicals").id,
            },
          ],
        },
      },
      {
        name: "Emilia Perez",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVdEjrZE2RF6_Lb1VhQH1N341iiPgzy-q7F2pEZts_rb3wGi6wuwSLPrX8h5bzRdpLQfX2QCcJshAg4rhc8bRaaP2-uMPOL1xK28KOmQRmrWrjgHuRP2ZH1p-TIbAZ8iFLAFQ3xqfLOIBPVvBs_-sUtV1Jt9t_rv6JFj3tPnVL86YJbdhaEsjdUULUXwZSudJM5lcuFW4Fxq3HQW6e1_xy8SrmnwuYtZI-SvhUl0v23Anq2sEq5wbhtKa2DZcm6mH2HClcUJ94Hn7qRHGAGyyW3trKRdXpKwqFUztvSLxzq1pt6YX3xfmrdf.jpg?r=725",
        trending: true,
        description:
          "A girl finds her true self and what the future holds for...",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Faith & Spirituality")
                .id,
            },
            {
              id: genres.find((genre) => genre.name === "Holidays").id,
            },
            {
              id: genres.find((genre) => genre.name === "International").id,
            },
            {
              id: genres.find((genre) => genre.name === "Music & Musicals").id,
            },
          ],
        },
      },
      {
        name: "Money Heist",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTBhu9wpryHcin_H70GlZgh-X65JR0S9ChA&s",
        trending: true,
        description:
          "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. ",
        top10: true,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "International").id,
            },
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            {
              id: genres.find((genre) => genre.name === "Crime").id,
            },
          ],
        },
      },
      {
        name: "Get Hom to the Creek",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV2KQcyIzhPs5dys1E-ZtYnBsA1leU-5df9d75Yj23g1ZEqwkzCIo3JGwuA21gdF3YdX1PpBYWQdCBR8Vx1m5Mnf-V_F5nQncpw.webp?r=8e7",
        trending: true,
        description:
          "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. ",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Music & Musicals").id,
            },
            {
              id: genres.find((genre) => genre.name === "Cult").id,
            },
          ],
        },
      },
      {
        name: "Wham!",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRwhOZi8BdPW2T0s5kOX3YGDKkdMtK4sThyEywUSU6qsxdH4gMiO6a6z-s8g1MNwXjkxoUg1r65iwAYB69iTqCKn9DUcdXJzpIhWHVzMrbnAHUNPfwS9i9XMlsZ0GYDuCGfE.jpg?r=6ee",
        trending: false,
        description:
          "Musical Arists George Michael & Andrew Ridgeley share their experience recording music in the 80's.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Music & Musicals").id,
            },
            {
              id: genres.find((genre) => genre.name === "Documentaries").id,
            },
          ],
        },
      },
      {
        name: "The Butterfly Affect",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ3WV8w0tBBjJKwC0uE_kjSvR9l49YlqSo0-VnP2rwNpkpwBX_QJ10ob8i8st5Ur9rDx_gCZDXndoqTt0Gr4ZjKX97H-DBTvZQbe3kGHZqNwf9fh9Fgzaz1GLEeaGZxwwixYlLZc5Oa7Bv8hdT2AW61CFNAqmUOe3G-SZbDK3dTXR8LEYtQbRHGCGTKt-X-azWKzLjH6KeNR-PmwR5yKvN5i_QTvHKpslRMbPi1TBTHjK1HpvwmVicW_ckkbJvr3PgGgCIOKWWHqPFhxgy8MVf1Efw.webp?r=f29",
        trending: true,
        description:
          "Young boy experiences psychosis, blackouts and paranoia after a tragic accident in his early childhood.",
        top10: true,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Sci - Fi").id },
          ],
        },
      },
      {
        name: "Ghostbusters Frozen Empire ",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXK22BQZz3MM2B8sAhYlHmg6L5ZwjLLF5l6mm1Z_c1VbladRIl9YFRmITf1WlxNfNIA8opvxpg-h3Zba3Voy8HqQCARBevHoaFc.webp?r=0ba",
        trending: false,
        description:
          "The Spengler family returns to the iconic New York City firehouse where the original Ghostbusters have taken ghost-busting to the next level. ",
        top10: false,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Sci - Fi").id },
          ],
        },
      },
      {
        name: "What happened to Monday?",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZb_nWNKV5Ef8qbIqZ0Mimp7DorK7Xuac0ZLWCPjQRX79n_u2EdI8d6l5Bgck7E9zgBA5t5jNVhM-Gj3RaGuOcUQk17TLb_vrc2QdNlJcl6D5OFK4Qxc0XuCcewduM4Kn-RX.jpg?r=436",
        trending: false,
        description:
          "In a world where families are allowed only one child due to overpopulation, resourceful identical septuplets must avoid governmental execution and dangerous infighting while investigating the disappearance of one of their own.",
        top10: false,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Sci - Fi").id },
            { id: genres.find((genre) => genre.name === "Thriller").id },
            { id: genres.find((genre) => genre.name === "Action").id },
            { id: genres.find((genre) => genre.name === "Crime").id },
          ],
        },
      },
      {
        name: "Dave Chappelle the Dreamer",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ8bq9kWOhi01Y-hGHbzx4nZ7Iw3mR6a4aO2CPCcYtpYHY7YgWm0wDsRj495I4wOqE78i5wN4QQcZSvNVdL5n-uNIW9R0z53Sw-NvmvZ1UG_UGkqjF5Vfo09KbkoecZGm3Dz.jpg?r=bfc",
        trending: false,
        description:
          "Dave Chappelle performs his remarkable standup comedic number, garnering acclaim for his 'realness' & vulnerablities",
        top10: false,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Stand - up").id },
            { id: genres.find((genre) => genre.name === "Comedy").id },
          ],
        },
      },
      {
        name: "Legends of the Fall",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXDG0Gze0ydrhbXqIQrntcH0BjtVk3_k7ncyOL8Df-MIkti75BVvFWbZw2swNbuhV2lMSnyxfwC8ufqBtDL252Z56_xoJaUD8us.webp?r=e70",
        trending: true,
        description:
          "In early 20th-century Montana, Col. William Ludlow (Anthony Hopkins) lives in the wilderness with his sons, Tristan (Brad Pitt), Alfred (Aidan Quinn) and Samuel (Henry Thomas).",
        top10: true,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Classics").id },
            { id: genres.find((genre) => genre.name === "Drama").id },
          ],
        },
      },
      {
        name: "Jaws",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUu9ApPSzc2OB9n2c5xuLcJI_dhZSgeReAcuDWDWn0DZ7WTTTBDQL0lqcjZqbfxnScfaagzjoSRyiZY1glMNz2oCYHwyswFoXsZx0TT0i2216zYrbP6eCk3kC80bu77j-R35KYf7VDoG_xskBdvWRskV1WTUtQVE8oAlXdhKG8DQfxYCmELajBO_A5DNlMiJn-SElwZWqwgj6LX9Q7YIEMOjyiApWPwULp9mO4w7zywPbNynM0gBxs3elVyhx8BGTqCxZYfYjB-M6s1gZC1IEARNdg.webp?r=7e2",
        trending: true,
        description:
          "When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town.",
        top10: true,
        genres: {
          connect: [
            { id: genres.find((genre) => genre.name === "Classics").id },
            { id: genres.find((genre) => genre.name === "Thriller").id },
            { id: genres.find((genre) => genre.name === "Action").id },
          ],
        },
      },
      {
        name: "Mr & Mrs.Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8784GTgxIwFf9xuKjFsyb-E5mI-xqZ4SSQ&s",
        trending: true,
        description:
          "ohn (Brad Pitt) and Jane Smith (Angelina Jolie), a couple in a stagnating marriage, live a deceptively mundane existence. However, each has been hiding a secret from the other",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Romance / RomCom").id,
            },
            { id: genres.find((genre) => genre.name === "Action").id },
            { id: genres.find((genre) => genre.name === "Crime").id },
          ],
        },
      },
      {
        name: "Aloha",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbp0jxT8vBD6yMzOALXz1iZjedxlf9jGKNcrE1M0GMsyUGoJNzJpXkNudCMw57hDekeGL181GMw8BCNL52UfHFLl0Np635g_JzE.webp?r=3fe",
        trending: true,
        description: "",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Romance / RomCom").id,
            },
            { id: genres.find((genre) => genre.name === "Comedy").id },
            { id: genres.find((genre) => genre.name === "Drama").id },
          ],
        },
      },
      {
        name: "The kissing Booth",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvHwbJj-doVy6GwYOy2HGm3VRmToDr8u0Asmohm3mNTjIgzLMkZX2XF66e_y2m-3wJ4yYnglQt6p4c7ITQlw-TXKKGShL5ej7AgZjaw3o6aXK88k-H0PW7PFdnO93i1P4NX.jpg?r=db1",
        trending: false,
        description: "Two total opposites unite and find love in eachother",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Romance / RomCom").id,
            },
            { id: genres.find((genre) => genre.name === "Comedy").id },
            { id: genres.find((genre) => genre.name === "Drama").id },
          ],
        },
      },
      {
        name: "El Camino",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSkRGppo2XkWhMd0cYKiUuh3JEOq1moWFgi9HSqf4YjwbjIWY74PU1Yne-mheCn4o0MdnhlB80FD1_cW0z_gXckjPuRY-gZdpAGpDKB-UjHlzrn7PzPBHuIB5KD-jAh-qk4t.jpg?r=7e4",
        trending: false,
        description: "Continuation of breaking bad, but even worse...",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            { id: genres.find((genre) => genre.name === "Thriller").id },
          ],
        },
      },
      {
        name: "Mine",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWFq1RlnRHVDmJQG6llNe_iwxZmTA8t_hS8NIAuwZSMIYJE7iKMgTrjdyUnJzYijSqI4O5M69tnFppj3LR2-oy5GJC2mMij-QFk.webp?r=8d9",
        trending: false,
        description:
          "A US Marine sniper becomes trapped in the desert after standing on a landmine. In order to survive he must single-handedly fight off the enemy while waiting more than two days for a convoy to rescue him.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            { id: genres.find((genre) => genre.name === "Thriller").id },
            { id: genres.find((genre) => genre.name === "International").id },
          ],
        },
      },
      {
        name: "The devil All The Time",
        img: "https://occ-0-3265-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT4a0fYjL70bpc6TuVaUhx2V_1fX4pQIg-Of--4qq5ryXnGLBD6hJp3G-e-LXfOL44mU6O2K1XgZ8w1PmojeaEqaYsl1HbJWsmx42oL9x29INeLUN3pZIoRj70KPQQuawLYv.jpg?r=7cd",
        trending: true,
        description:
          "A young man devoted to protecting his loved ones must face off against corruption and sinister characters in a postwar backwoods town.",
        top10: false,
        genres: {
          connect: [
            {
              id: genres.find((genre) => genre.name === "Action").id,
            },
            { id: genres.find((genre) => genre.name === "Thriller").id },
            { id: genres.find((genre) => genre.name === "International").id },
          ],
        },
      },
    ];
    for (let movieInfo of moviesArrayData) {
      await prisma.movies.create({
        data: movieInfo,
      });
    }
  } catch (err) {
    throw err;
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
