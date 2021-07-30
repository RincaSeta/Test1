tinhnăngngoài = new function () {

    if (iA(tôi.lấy("i"), ["59327", "59333", "59328"]) && $(window).width() > 500) {
        var color = localStorage.getItem("color") && localStorage.getItem("color");
        function bay(a) {
            if (a) {
                $('body').find('#bayMàu').remove();
                $("body").before(
                    $("#ẩn").iStyle(Chíp.làmMàu(a))
                )
            }
        }
        bay(color);
        $("body").append(
            $("<div>", { class: "pf t0 df fdc jcss z999" }).css({
                left: "90%",
                height: $("body").find(".bar1").height()
            }).append(

                $("<div>", { class: "bgcgd pa5 pr", text: "=" }).sổ($.map({
                    1: "Chức náng của Bằng",
                    2: "Copy báo cáo thực tập sinh",
                    3: "Bay màu",
                    4: "Chơi đồ"
                }, function (v, i) {
                    var clThêm;
                    // if (i = 1) {
                    // clThêm = "cf,-pa,-pp" //vd về bo
                    // }
                    return { chữ: i + ". " + v, giáTrị: i }// bo: clThêm
                }), {
                    // sẵn: d[c],
                    nhãn: "",
                    // sổ: false,
                }, function (v) {
                    var t = $(this);
                    t.empty().append(
                        "=" + '<o class="iIcon ffi usn bra3 tac fsn sổ koIn pen pa r0 t50 tty plr2 fs12">arrow_drop_down</o>'
                    )
                    switch (v) {
                        case "1":
                            function lấyBCTTS(idbv) {
                                $.ajaxSetup({
                                    async: false,
                                });
                                var thôngTin;
                                CẦN.db("bàiViết." + idbv, function () {
                                    var a = config("bàiViết." + idbv);
                                    var cậpNhật = a.ậ;
                                    a = a.ộ;
                                    $("body").append(
                                        $("<div>", { class: "z999 bgcf pf t0 l0 dn", html: a }).each(function () {
                                            var t = $(this);
                                            var c = t.find("tr").last().html();
                                            t.empty().append(c).each(function () {
                                                var t = $(this);

                                                thôngTin = {
                                                    cậpNhật: cậpNhật,
                                                    ngày: t.children().eq(1).text(),
                                                    họTên: t.children().eq(2).text(),
                                                    nộiDung: t.children().eq(3).text(),
                                                    hướngDẫn: t.children().eq(4).text(),
                                                    link: t.children().eq(5).html()
                                                };
                                            });
                                        })
                                    )
                                });
                                $.ajaxSetup({
                                    async: true,
                                });
                                return thôngTin;
                            }
                            var BC,
                                khôngGiờHômNay = pI(new Date(now("DD-MM-YY")).getTime() / 1000);
                            var TTS = lấyBCTTS(51347);
                            var TTS2 = lấyBCTTS(50433);
                            $.ajaxSetup({
                                async: false,
                            });
                            CẦN.db("bàiViết.50260", function () {
                                var a = config("bàiViết.50260"),
                                    a = a.ộ;
                                var cậpNhật = a.ậ;
                                $("body").append(
                                    $("<div>", { class: "z999 bgcf pf t0 l0 dn", html: a }).each(function () {
                                        var t = $(this);
                                        var c = t.find("tr").last().html();
                                        t.empty().append(c).each(function () {
                                            var t = $(this);
                                            BC = {
                                                cậpNhật: cậpNhật,
                                                stt: t.children().eq(0).text(),
                                                ngày: t.children().eq(1).text(),
                                                họTên: t.children().eq(2).text(),
                                                nộiDung: t.children().eq(3).text(),
                                                hướngDẫn: t.children().eq(4).text(),
                                                ghiChú: t.children().eq(5).text()
                                            };
                                        });
                                    })
                                )
                            })
                            $.ajaxSetup({
                                async: true,
                            });
                            khung((
                                $("<div>", { class: "pa10" }).each(function () {
                                    var t = $(this);
                                    t.append(
                                        $("<file>", { class: "đínhKèm db bar brb5 bn mb5 pb5 plr10 fs09 bấmĐc" }).append(
                                            $("<div>", { tên: d, class: "tậpTin cl1 thôngBáoSố ", text: dữLiệu.tên("41006", "ậ") }).data({ tậpTin: 41006 })
                                        ),
                                        $("<file>", { class: "đínhKèm db bar brb5 bn mb5 pb5 plr10 fs09 bấmĐc" }).append(
                                            $("<div>", { tên: d, class: "tậpTin cl1 thôngBáoSố ", text: dữLiệu.tên("41007", "ậ") }).data({ tậpTin: 41007 })
                                        ),
                                        $("<file>", { class: "đínhKèm db bar brb5 bn mb5 pb5 plr10 fs09 bấmĐc" }).append(
                                            $("<div>", { tên: d, class: "tậpTin cl1 thôngBáoSố ", text: dữLiệu.tên("41008", "ậ") }).data({ tậpTin: 41008 })
                                        ),
                                        $("<file>", { class: "đínhKèm db bar brb5 bn mb5 pb5 plr10 fs09 bấmĐc" }).append(
                                            $("<div>", { tên: d, class: "tậpTin cl1 thôngBáoSố ", text: dữLiệu.tên("41009", "ậ") }).data({ tậpTin: 41009 })
                                        ),
                                        $("<file>", { class: "đínhKèm db bar brb5 bn mb5 pb5 plr10 fs09 bấmĐc" }).append(
                                            $("<div>", { tên: d, class: "tậpTin cl1 thôngBáoSố ", text: dữLiệu.tên("41010", "ậ") }).data({ tậpTin: 41010 })
                                        ),
                                        $("<table>", { border: "1px solid", style: "border-collapse: collapse", width: "100%", class: "optimized w1 ítViền bw1" }).append(
                                            $("<tr>", { class: "bgcyl bb1 bs2 bcrd" }).append(
                                                $("<td>", { class: "", text: BC.stt }),
                                                $("<td>", { class: "", text: BC.ngày, contenteditable: true }),
                                                $("<td>", { class: "", text: BC.họTên, contenteditable: true }),
                                                $("<td>", { class: "", text: BC.nộiDung, contenteditable: true }),
                                                $("<td>", { class: "", text: BC.hướngDẫn, contenteditable: true }),
                                                $("<td>", { class: "", text: BC.ghiChú, contenteditable: true }),
                                            ),
                                            $("<tr>", { class: "" }).append(
                                                $("<td>", { class: "", text: BC.stt * 1 + 1 }),
                                                $("<td>", { class: "", text: TTS.ngày, contenteditable: true }),
                                                $("<td>", { class: "", text: TTS.họTên, contenteditable: true }),
                                                $("<td>", { class: "", text: TTS.nộiDung, contenteditable: true }),
                                                $("<td>", { class: (TTS.cậpNhật > khôngGiờHômNay) && "crd fwb", text: TTS.hướngDẫn, contenteditable: true }),
                                                $("<td>", { class: "", text: "", contenteditable: true }),
                                            ),
                                            $("<tr>", { class: "" }).append(
                                                $("<td>", { class: "", text: BC.stt * 1 + 1 }),
                                                $("<td>", { class: "", text: TTS2.ngày, contenteditable: true }),
                                                $("<td>", { class: "", text: TTS2.họTên, contenteditable: true }),
                                                $("<td>", { class: "", text: TTS2.nộiDung, contenteditable: true }),
                                                $("<td>", { class: (TTS2.cậpNhật > khôngGiờHômNay) && "crd fwb", text: TTS2.hướngDẫn, contenteditable: true }),
                                                $("<td>", { class: "", text: "", contenteditable: true }),
                                            ),
                                        ),
                                        $("<div>", { class: "tar mt25 df" }).append(
                                            $("<div>", { class: "btn ptb5 plr10 fwb bra3 mlr10 fl bg1 cf", text: "Thêm", tip: "Thêm" }).on("click", function () {
                                                var t = $(this).parent().parent();
                                            }),
                                            $("<div>", { class: "btn ptb5 plr10 fwb bra3 mlr10 fl c6", text: "Hủy", tip: "Hủy" }).on("click", function () {
                                                $("#báoCáoTTS").find(".đóngKhung").trigger("click");
                                            }),
                                        )
                                    )

                                })
                            ), "báoCáoTTS", {
                                tiêuĐề: "Báo cáo", //tên của khung nội dung
                                ngoài: "", //set các class cho nền đen
                                trong: "col-xs-6,col-sm-6", //set các class cho khung nội dung hiển thị
                                koTắt: true, //true: không tắt khung khi click vào nền đen
                                onRender: function () {
                                },
                                onShow: function () {
                                },
                                onHide: function () {

                                },
                            });

                            //!
                            // thôngBáo.đồngÝ({
                            //     tiêuĐề: "Xác nhận!",
                            //     môTả: "Bạn chắc chắn muốn thực hiện thao tác?",
                            //     đổi: function (ok) {
                            //         if (ok) {
                            //             var t = $("#" + "bàiViết" + đọcURL()[2]),
                            //                 ngườiGửi = config("bàiViết." + đọcURL()[2]),
                            //                 cácBìnhluận = config("bàiLực." + đọcURL()[2]),
                            //                 khôngGiờHômNay = pI(new Date(now("DD-MM-YY")).getTime() / 1000);
                            //             xửLý("bàiViết.tải", {
                            //                 d: {
                            //                     à: [tôi.lấy("i")]
                            //                 },
                            //                 e: ">" + khôngGiờHômNay
                            //             }, function () {
                            //             })
                            //             t.find("#bìnhLuận").iVal("Gửi anh chị em đã nhận được thông tin!");
                            //             thôngBáo.ok()
                            //             t.find(".đăng").trigger("click");
                            //         }
                            //     }
                            // })
                            break;
                        case "2":
                            break;
                        case "3":
                            $('<input>', { type: 'color', class: 'dn bayMàu' }).on('input', function () {
                                bay($(this).val());
                                localStorage.setItem("color", $(this).val());
                            }).trigger('click');
                            break;
                        case "4":
                            cl(123)
                            nói("các bé cùng chơi đồ nào","việt");
                            $("body").append(
                                $("<div>", { class: "z999 bgcf pf t0 l0 dn", html: "123123123123123" }).append(
                                    `<audio controls autoplay loop>
                                <source src="horse.ogg" type="audio/ogg">
                                <source src="https://aredir.nixcdn.com/NhacCuaTui969/999DoaHongDJNamTauRemix-DJ-5673090.mp3?st=5v8Beso2vRtibsx5-44l8g&e=1589777475" type="audio/mpeg">
                                //Your browser does not support the audio element.
                                // https://aredir.nixcdn.com/NhacCuaTui967/AiKhocNoiDauNayRemix-DJTDJ-5547563.mp3?st=rbdn6wycrIYvqYfEscCt8A&e=1589782266
                              </audio>`
                                ),
                                
                            )
                            setInterval(function () {
                                var mc = màu();
                                bay(mc)
                            }, 300);
                            break;
                    }
                })
            ).hover(function () {
                var t = $(this),
                    tcon = t.children();
                tcon.append(
                    $.icon("close::bấmĐc,fs15,pa,t0,r1,crd,fwb,dbh xóaĐê").tip("Xóa").on("click", function () {
                        t.remove();
                    })
                )
            }, function () {
                var t = $(this);
                t.find(".xóaĐê").remove();
            })
        )
    }
}