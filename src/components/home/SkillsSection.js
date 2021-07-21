import React from 'react';
import { skills } from '../../utils';

export const SkillsSection = () => {
	return (
		<section id='skills' className='skills section-bg'>
			<div className='container'>
				<div className='section-title'>
					<h2>Skills</h2>
					<p>
						Methodical software developer experienced in software development
						processes and optimal testing strategies. Help teams produce
						exceptional products by offering in-depth quality assurance support.
						Open and clear communicator with good multitasking skills, organized
						nature and strong attention to detail.
					</p>
				</div>

				<div className='row skills-content'>
					{skills.map((skill, skillIndex) => (
						<div
							className='col-lg-4 col-md-4 col-sm-6'
							data-aos='fade-up'
							key={skillIndex}
						>
							{skill.subSkills.map((subSkill, subSkillIndex) => (
								<div className='progress' key={subSkillIndex}>
									<span className='skill'>
										{subSkill.name}{' '}
										<i className='val'>{subSkill.experience} years</i>
									</span>
									<div className='progress-bar-wrap'>
										<div
											className='progress-bar'
											role='progressbar'
											aria-valuenow={subSkill.progress}
											aria-valuemin='10'
											aria-valuemax='100'
										></div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
