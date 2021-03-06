package com.codeclan.example.jurassic.repositories.dinosaurs;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.projections.EmbedPaddocks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource
@RepositoryRestResource(excerptProjection = EmbedPaddocks.class)
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {

//    List<Dinosaur> findDinosaurByPaddockId(Long Id);

}
