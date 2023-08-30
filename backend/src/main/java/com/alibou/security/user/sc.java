package com.alibou.security.user;


import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;



@RestController
@RequestMapping("/f")
@RequiredArgsConstructor

public class sc {
    private final sr service;
    private final jr servic;
    private final pdfDocumentRepository p;
    private  final UserRepository u;

    @PostMapping("/pc")
    public servise reg(
            @RequestBody servise request
    ) {
        service.save(request);
        return request;
    }

    @PostMapping("/pe")
    public jobs regg(
            @RequestBody jobs request
    ) {
        servic.save(request);
        return request;
    }

    @GetMapping("/j")
    public List<jobs> jobs() {


        return servic.findAll();
    }

    @GetMapping("/j/{categ}")
    public List<jobs> job(@PathVariable String categ) {


        return servic.findByCateg(categ);
    }

    @GetMapping("/s/{id}")
    public jobs jobs(@PathVariable int id) {


        return servic.findById(id);
    }

    @GetMapping("/je/{cate}")
    public List<servise> ser(@PathVariable String cate) {
        return service.findByCateg(cate);
    }

    @GetMapping("/je")
    public List<servise> se() {


        return service.findAll();
    }

    @PostMapping("/u")
    public anonce handleFileUpload(@RequestParam("name") String name, @RequestParam("email") String email, @RequestParam("phone") String phone, @RequestParam("ide") Integer ide, @RequestParam("id") Integer id, @RequestParam("date") String date,@RequestParam("namee") String namee,@RequestParam("title") String title, @RequestBody MultipartFile file) throws IOException {
        anonce pdfDocument = new anonce();





        pdfDocument.setName(name);
            pdfDocument.setEmail(email);
            pdfDocument.setPhone(phone);
            pdfDocument.setIde(ide);
            pdfDocument.setIdc(id);
            pdfDocument.setDate(date);
            pdfDocument.setNamee(namee);
            pdfDocument.setContent(file.getBytes());
            pdfDocument.setTitle(title);




            pdfDocument.setStatus("on hold");





p.save(pdfDocument);
            return pdfDocument ;

    }
    @GetMapping("/y/{categ}")
    public List<jobs> jo(@PathVariable String categ) {


        return servic.findByName(categ);
    }
    @GetMapping("/p/{id}")
    public List<anonce> jo(@PathVariable Integer id) {


        return p.findByIde(id);
    }
    @GetMapping("/v/{id}")
    public anonce j(@PathVariable Integer id) {

     anonce a=   p.findAllById(id);
     a.setStatus("confirmé");
     p.save(a);

     return p.findAllById(id);
    }
    @GetMapping("/o/{id}")
    public List<anonce>tt(@PathVariable Integer id) {


        return p.findByIdc(id);
    }
    @GetMapping("/jee/{cate}")
    public List<servise> serr(@PathVariable Integer cate) {
        return service.findByIdc(cate);
    }
    @DeleteMapping("l/{id}")
    public void ee(@PathVariable Integer id) {
        service.deleteById(id);


    }
    @GetMapping("/q/{id}")
    public byte[] file(@PathVariable Integer id)
    {
      return  p.findAllById(id).getContent();
    }
    @GetMapping("/o")
    public Page<jobs> getVotreData(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDirection) {

        Sort.Direction direction = sortDirection.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        return servic.findAll(pageable);
    }
    @GetMapping("/n")
    public Page<jobs> getVotreDat(@RequestParam(defaultValue = "Mechanical") String cate,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDirection) {

        Sort.Direction direction = sortDirection.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        return servic.findByCateg(cate,pageable);
    }
}









